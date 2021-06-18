import * as React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { EventProps } from '../../../@types/types';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import {
  getTicketsCount,
  getTicketsSold,
  formatPrice,
  formatDateTimeWithTimeZone,
} from '../../../lib';
import moment from 'moment-timezone';
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
            className="f4-l f5-m f7 fw6-l fw4 br-100 ba bw1 b--solid pv2-ns pv1 ph3-ns ph2 white noselect no-underline"
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
              gray: !toggle,
            })}`}
          >
            Upcoming Events
          </span>
          <span
            onClick={() => setToggle(false)}
            className={`ml3 noselect f4-ns f6 fw6-ns pb2  ${classnames({
              active: !toggle,
              gray: toggle,
            })}`}
          >
            Past Events
          </span>
        </div>
        {events.length > 0 ? (
          <>
            <table
              className=" w-100 tl center f6"
              style={{ borderCollapse: 'collapse' }}
            >
              <thead>
                <tr className="pv2 gray">
                  <th className="fw6-ns fw5">Name of Event</th>

                  {isL && <th className="fw6-ns fw5">Gross</th>}
                  {(isM || isL) && <th className="fw6-ns fw5">Status</th>}
                  <th className="fw6-ns fw5">Sold</th>
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
                          <Link href={`/dashboard/manage/${curr._id}`}>
                            <a className="white no-underline ">{curr.name}</a>
                          </Link>
                          <Link href={`/dashboard/manage/${curr._id}`}>
                            <a className="pt1 gray db no-underline ">
                              {formatDateTimeWithTimeZone(
                                new Date(curr.startDate),
                                'short',
                                curr.location.timeZoneId
                              )}
                            </a>
                          </Link>
                          <Link href={`/dashboard/manage/${curr._id}`}>
                            <a className="pt1 dark-gray db no-underline ">
                              {curr.location.venue}
                            </a>
                          </Link>
                          {!isL && (
                            <a className="pt1 gray db no-underline ">
                              {`${formatPrice(
                                (curr.gross / 100).toString(),
                                true
                              )}`}
                            </a>
                          )}
                          {!isL && !isM && (
                            <a
                              className={`pt1 no-underline  ${classnames({
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
                            </a>
                          )}
                        </td>
                        {isL && (
                          <>
                            <td className="pv2">
                              <a className="pt1 gray db no-underline ">
                                {`${formatPrice(
                                  (curr.gross / 100).toString(),
                                  true
                                )}`}
                              </a>
                            </td>
                          </>
                        )}
                        {(isM || isL) && (
                          <>
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
                          </>
                        )}
                        <td className="pv2">{`${getTicketsSold(
                          curr.ticketTypes,
                        )} / ${getTicketsCount(curr.ticketTypes)}`}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {events.filter((curr) => moment().isBefore(curr.endDate)).length ===
              0 &&
              toggle && (
                <p>
                  You don't have any upcoming events yet. Let's create one{' '}
                  <a href="/dashboard/create" className="no-underline white">
                    here
                  </a>
                </p>
              )}
          </>
        ) : (
          <p>
            You don't have any events created yet. Let's create one{' '}
            <a href="/dashboard/create" className="no-underline white">
              here
            </a>
          </p>
        )}
      </div>
    </div>
  );
};
