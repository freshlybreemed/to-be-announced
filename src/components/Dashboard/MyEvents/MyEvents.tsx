import * as React from 'react';
import classnames from 'classnames';
import { EventProps } from '../../../@types/types';
import { useMediaQuery } from 'react-responsive';

interface MyEventProps {
  events: EventProps[];
}

export const MyEvents: React.FunctionComponent<MyEventProps> = ({ events }) => {
  console.log(events);
  const isL = useMediaQuery({ query: '(min-width: 60em)' });
  const isM = useMediaQuery({
    query: '(max-width: 60em) and (min-width: 30em)',
  });
  return (
    <div className={'w-100 vh-100'}>
      <div className="mw8-ns w-100 dt pb3">
        <h1 className="dtc f1-ns f3 mt0">Manage Events</h1>
        <div className={`dtc v-mid tr`}>
          <a
            href={`/dashboard/create`}
            className="f4-l f5-m f7 fw6-l fw4 br-100 b--solid pv2-ns pv1 ph3-ns ph2 white noselect no-underline"
          >
            + Create Event
          </a>
        </div>
      </div>
      <div>
        <div className="pv3 mb4">
          <span
            className=" f4-ns f6 fw6-ns pb2 mr3"
            style={{
              borderBottom: '1px solid lightcyan',
              boxShadow: '0 -3px 0 lightcyan inset',
            }}
          >
            Upcoming Events
          </span>
          <span
            className="ml3 dim noselect f4-ns f6 fw6-ns pb2 gray"
            // style={{
            //   borderBottom: '1px solid ',
            //   boxShadow: '0 -3px 0 lightcyan inset',
            // }}
          >
            Past Events
          </span>
        </div>
        <table
          className=" w-100 tl center f6"
          style={{ borderCollapse: 'collapse', borderSpacing: 0 }}
        >
          <thead>
            <tr className="pv2 gray">
              <th className="fw6-ns fw5">Name of Event</th>
              <th className="fw6-ns fw5">Status</th>
              <th className="fw6-ns fw5">Date</th>
              {isL && <th className="fw6-ns fw5">Time</th>}
              {(isM || isL) && <th className="fw6-ns fw5">Venue</th>}
            </tr>
          </thead>
          <tbody>
            {events.map((curr, ind) => {
              const live = new Date(curr.startDate) > new Date();
              return (
                <tr
                  className={`fw7-ns fw5 f5-ns f6 ${classnames({
                    bt: ind > 0,
                  })}`}
                >
                  <td className="pv2">
                    <a
                      className="white no-underline "
                      href={`/dashboard/manage/${curr.slug}`}
                    >
                      {curr.name}
                    </a>
                  </td>
                  <td
                    className={`pv2 ${classnames({
                      green: live,
                      red: !live,
                    })}`}
                  >
                    <span className="f5">•</span> {live ? `Live` : `Sale Ended`}
                  </td>
                  <td className="pv2">6/1/2020</td>
                  {isL && <td className="pv2">5:00PM</td>}
                  {(isM || isL) && (
                    <td className="pv2">{`${curr.location.venue}`}</td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
