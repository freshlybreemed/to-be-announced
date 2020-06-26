import * as React from 'react';
import Link from 'next/link';
import {
  formatDate,
  formatPrice,
  formatEventDateTime,
  getOrderTicketCount,
} from '../../../lib';
import classnames from 'classnames';
import { EventProps } from '../../../@types/types';
import { useMediaQuery } from 'react-responsive';
import Router from 'next/router';

interface AttendeesProps {
  event: EventProps;
  tickets: any;
}
export const Attendees: React.FunctionComponent<AttendeesProps> = ({
  event,
  tickets,
}) => {
  console.log(tickets);
  const isNS = useMediaQuery({
    query: '(min-width: 30em)',
  });
  const isL = useMediaQuery({ query: '(min-width: 60em)' });
  const isM = useMediaQuery({
    query: '(max-width: 60em) and (min-width: 30em)',
  });
  console.log('isNs', isNS);
  console.log('isS', !isNS);
  console.log('isL', isL);
  console.log('isM', isM);

  return (
    <div className={'w-100'}>
      <main className="mw9 ml4-ns center">
        <article className="dt tc tl-ns w-90-l w-100-m  pb2 mv2">
          <div className="dtc-l dtc-m pl3-l pt2-m pb2 v-mid  fw7">
            <div className=" lh-title f3 mb0 mt0-ns underline-hover">
              <a className="white no-underline">{event.name}</a>
            </div>
            <div className="f4-ns f5 fw6 lh-title mv0 underline-hover">
              <a
                className="white no-underline"
                target="_blank"
                href={`https://www.google.com/maps/place/?q=place_id:${event.location.placeId}`}
              >
                {event.location.venue}
              </a>
            </div>
            <div>
              <span className="f4-ns f5 fw6 mv0 gray">
                {`${formatEventDateTime(
                  new Date(event.startDate),
                  new Date(event.endDate),
                  event.location.timeZoneId,
                )}`}
              </span>
            </div>
          </div>
          <div className="w-auto-m dtc" />
        </article>

        <section className="fl w-100 ">
          <div className="bg-black-80">
            <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv2">
              Attendee List
            </span>
            <div className="pt4 pr2-ns mr3-ns">
              <table
                className="f6-ns f7 w-100  pb2 center"
                style={{ borderCollapse: 'collapse' }}
              >
                <thead>
                  <tr className="f5-ns f6 fw7 tl">
                    <th className="pa1 bb b--gray bw1 ">Date</th>
                    <th className="pa1 bb b--gray bw1 ">Name</th>
                    {isL && <th className="pa1 bb b--gray bw1  ">Email</th>}
                    <th className="pa1 bb b--gray bw1  ">Quantity</th>
                    <th className="pa1 bb b--gray bw1 ">Total Sales</th>
                  </tr>
                </thead>
                <tbody className="lh-copy f4-l f5-m f6">
                  {tickets.map((curr, ind) => {
                    return (
                      <Link
                        href={`/manage/${event.slug}/attendees/${curr._id}`}
                      >
                        <tr
                          onClick={() =>
                            Router.push(
                              `/manage/${event.slug}/attendees/${curr._id}`
                            )
                          }
                          key={ind}
                          className={`dim ${classnames({ bt: ind > 0 })}`}
                        >
                          <td className="pa1">
                            {formatDate(new Date(curr.orderDate), 'shorter')}
                          </td>
                          <td className="pa1">
                            <a href="" className="white no-underline">
                              {`${curr.firstName} ${curr.lastName}`}
                            </a>
                          </td>
                          {isL && (
                            <td className="pa1">
                              <a href="" className="white no-underline">
                                {curr.emailAddress}
                              </a>
                            </td>
                          )}
                          <td className="pa1">
                            {getOrderTicketCount(curr.cart)}
                          </td>
                          <td className="pa1">
                            {formatPrice(curr.total.toString(), true)}
                          </td>
                        </tr>
                      </Link>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
