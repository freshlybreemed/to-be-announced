import * as React from 'react';
import { useState } from 'react';
import {
  formatDate,
  formatPrice,
  formatEventTime,
  getTicketCount,
  getOrderTicketCount,
} from '../../../lib';
import classnames from 'classnames';
import { TicketProps, EventProps } from '../../../@types/types';
import { useMediaQuery } from 'react-responsive';

interface ManageProps {
  event: EventProps;
}
export const ManageEvent: React.FunctionComponent<ManageProps> = ({
  event,
}) => {
  const [live] = useState<boolean>(new Date(event.startDate) > new Date());
  const [ticketTypes] = useState<any>(
    Object.keys(event.ticketTypes).map((curr) => {
      return event.ticketTypes[curr];
    }),
  );

  console.log(event);
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
          {/* <div className="dtc-l dtc-m v-mid ">
            <img src={event.image} className="db w-90" />
          </div> */}
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
                {`${formatEventTime(
                  new Date(event.startDate),
                  new Date(event.endDate),
                )}`}
              </span>
            </div>
            <h2
              className={`f4-ns f5 fw6 mv0 ${classnames({
                green: live,
                red: !live,
              })}`}
            >
              • {live ? `Live` : `Sale Ended`}
            </h2>          </div>
          <div className="w-auto-m dtc" />
          <div className="dtc-l dtc-m v-mid tr f4-l f5 fw5">
            <a
              href={`/e/${event.slug}`}
              className="b--white dib no-underline white noselect dim br-100 b--solid pa2 mt2-l ph3 mr2"
            >
              View
            </a>
            <a
              href={`/dashboard/edit/${event.slug}`}
              className="b--white dib no-underline white noselect dim br-100 b--solid pa2 mr2 mt2-l ph3 mt2"
            >
              Edit
            </a>
          </div>
        </article>
        <div className="flex flex-wrap justify-between w-100 nr3 mb4">
          <article className="mw8 bg-black-80 br3 w-30-l w-100 pa3   mv1  bg-green">
            <div className="cf">
              <div className="fl w-60  tl  ">
                <span className="f4-ns fw6 f5 ">Net Sales </span>
              </div>
              <div className="fl w-40 tr">
                <span className="f3 f4-ns fw6  ">
                  {formatPrice(event.gross.toString(), true)}
                </span>
              </div>
            </div>
          </article>
          <article className="mw8 bg-black-80 br3 w-30-l w-100 pa3  mv1 bg-purple">
            <div className="cf">
              <div className="fl w-60  tl ">
                <span className="f4-ns fw6 f5 ">Tickets Sold</span>
              </div>
              <div className="fl w-40  tr ">
                <span className="f3 f4-ns fw6  ">
                  {`${getTicketCount(event.ticketTypes)}/${ticketTypes.reduce(
                    (acc, curr) => acc + curr.quantity,
                    0,
                  )}`}
                </span>
              </div>
            </div>
          </article>
          <article className="mw8 bg-black-80 br3 w-30-l w-100 pa3  mv1 bg-blue">
            <div className="cf v-mid">
              <div className="fl w-60 tl ">
                <span className="f4-ns fw6 f5 tc ">Page Views</span>
              </div>
              <div className="fl w-40   tr ">
                <span className="f3 f4-ns fw6 ">743</span>
              </div>
            </div>
          </article>
        </div>
        <div className="flex flex-wrap justify-between w-100 nr3 mb4">
          <section className="fl w-48-l w-100 mb2 ">
            <div className="bg-black-80  pl0 ">
              <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv2">
                Sales By Ticket Types{' '}
              </span>
              <div className="pt4 pb0-l pb3  ">
                <div className="overflow-auto">
                  <table
                    className="f6 w-100 mw8 center"
                    style={{ borderCollapse: 'collapse' }}
                  >
                    <thead className="bb">
                      <tr className="f5 fw7 tl ">
                        <th className="pa1 bb b--gray bw1 ">Ticket Type</th>
                        <th className="pa1 bb b--gray bw1 ">Price</th>
                        <th className="pa1 bb b--gray bw1 ">Sold</th>
                        <th className="pa1 bb b--gray bw1">Status </th>
                      </tr>
                    </thead>
                    <tbody className="lh-copy f4">
                      {ticketTypes.map((curr: TicketProps, key: number) => {
                        return (
                          <tr key={key}>
                            <td className="pa1 ">{curr.ticketName}</td>
                            <td className="pa1 ">
                              {formatPrice(curr.price.toString())}
                            </td>
                            <td className="pa1">
                              {curr.sold}/{curr.quantity}
                            </td>
                            <td className="pa1 ">
                              {curr.enabled ? `On Sale` : `Sold Out`}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="fl w-48-ns w-100 mb2 ">
            <div className="bg-black-80  ">
              <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv2">
                Payouts{' '}
              </span>
              <p className="pt4">
                You currently have no payouts scheduled. Set up one{' '}
                <span className="b">
                  <a className="white" href="">
                    here.
                  </a>
                </span>
              </p>
            </div>
          </section>
        </div>
        <section className="fl w-100 ">
          <div className="bg-black-80">
            <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3-ns mv2">
              Attendee List{' '}
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
                  {event.tickets.map((curr, ind) => {
                    return (
                      <tr
                        key={ind}
                        className={`dim ${classnames({ bt: ind > 0 })}`}
                      >
                        <td className="pa1">
                          {formatDate(new Date(curr.date), 'shorter')}
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
                    );
                  })}
                </tbody>
              </table>
              <span className="b bb">
                <a className="white no-underline" href="">
                  See More...
                </a>
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
