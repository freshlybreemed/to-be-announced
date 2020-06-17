import * as React from 'react';
import classnames from 'classnames';
import { EventProps } from '../../../@types/types';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { formatDate, formatTime } from '../../../lib';
import moment from 'moment';
interface MyEventProps {
  events: EventProps[];
}

export const MyEvents: React.FunctionComponent<MyEventProps> = ({ events }) => {
  const [toggle, setToggle] = useState<boolean>(true);
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
        <div className="pv3 mb4 bb-hover">
          <span
            onClick={() => setToggle(true)}
            className={`f4-ns noselect f6 fw6-ns pb2 mr3 ${classnames({
              active: toggle,
            })}`}
          >
            Upcoming Events
          </span>
          <span
            onClick={() => setToggle(false)}
            className={`ml3 noselect f4-ns f6 fw6-ns pb2 gray ${classnames({
              active: !toggle,
            })}`}
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
            {events
              .filter((curr) =>
                toggle
                  ? moment().isBefore(curr.endDate)
                  : moment().isAfter(curr.endDate),
              )
              .map((curr, ind) => {
                const live = moment().isBefore(curr.endDate);
                const inProgress = moment().isBetween(
                  curr.startDate,
                  curr.endDate,
                );
                return (
                  <tr
                    key={ind}
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
                        green: live && !inProgress,
                        red: !live,
                        yellow: inProgress,
                      })}`}
                    >
                      <span className="f5">•</span>{' '}
                      {inProgress
                        ? `In Progress`
                        : live
                        ? `Live`
                        : `Sale Ended`}
                    </td>
                    <td className="pv2">
                      {formatDate(new Date(curr.startDate))}
                    </td>
                    {isL && (
                      <td className="pv2">
                        {formatTime(new Date(curr.startDate))}
                      </td>
                    )}
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
