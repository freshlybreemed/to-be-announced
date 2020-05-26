import * as React from 'react';
import { useState } from 'react';
import { formatDate, formatPrice, formatEventTime } from '../../../lib';
import { TicketProps, EventProps } from '../../../@types/types';

interface ManageProps {
  event: EventProps;
}
export const ManageEvent: React.FunctionComponent<ManageProps> = ({
  event,
}) => {
  const [ticketTypes] = useState<any>(
    Object.keys(event.ticketTypes).map((curr) => {
      return event.ticketTypes[curr];
    }),
  );

  console.log(event);
  return (
    <div className={'w-100'}>
      <main className="mw9 ml4-ns center">
        <article className="dt tc tl-ns w-90-l w-100-m  pb2 mv2">
          {/* <div className="dtc-l dtc-m v-mid ">
            <img src={event.image} className="db w-90" />
          </div> */}
          <div className="dtc-l dtc-m pl3-l pt2-m  v-mid f3-l f5 fw7">
            <div>
              <span className=" lh-title mb0 mt0-ns underline-hover">
                <a className="white no-underline">{event.name}</a>
              </span>
            </div>
            <div>
              <span className="f4-ns f5 fw6 lh-title mv0 underline-hover">
                <a
                  className="white no-underline"
                  target="_blank"
                  href={`https://www.google.com/maps/place/?q=place_id:${event.location.placeId}`}
                >
                  {event.location.venue}
                </a>
              </span>
            </div>
            <div>
              <span className="f4-ns f5 fw6 mv0 gray">
                {`${formatEventTime(
                  new Date(event.startDate),
                  new Date(event.endDate),
                )}`}
              </span>
            </div>
            <h2 className="f4-ns f5 fw6 mv0 green">• Live</h2>
          </div>
          <div className="w-auto-m dtc"></div>
          <div className="dtc-l dtc-m v-mid tr f4-l f5 fw5">
            <a
              href={`/e/${event.slug}`}
              className="b--white dib no-underline white noselect dim br-100 b--solid pa2 mt2-l ph3 mr2 mb2-m "
            >
              View
            </a>
            <a
              href={`/dashboard/edit/${event.slug}`}
              className="b--white dib no-underline white noselect dim br-100 b--solid pa2 mr2 mt2-l ph3 "
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
                <span className="f3 f4-ns fw6  ">$173.50</span>
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
                  73/{ticketTypes.reduce((acc, curr) => acc + curr.quantity, 0)}
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
              <div className="pt4 ">
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
                      {ticketTypes.map((curr: TicketProps) => {
                        return (
                          <tr>
                            <td className="pa1 ">{curr.ticketName}</td>
                            <td className="pa1 ">
                              {formatPrice(curr.price.toString())}
                            </td>
                            <td className="pa1">3/{curr.quantity}</td>
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
        <section className="fl w-90 ">
          <div className="bg-black-80">
            <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv2">
              Attendee List{' '}
            </span>
            <div className="pt4 ">
              <table
                className="f6-ns f7 w-100  center"
                style={{ borderCollapse: 'collapse' }}
              >
                <thead>
                  <tr className="f5-ns f6 fw7 tl">
                    <th className="pa1 bb b--gray bw1 ">Date</th>
                    <th className="pa1 bb b--gray bw1  ">Email</th>
                    <th className="pa1 bb b--gray bw1  ">Quantity</th>
                    <th className="pa1 bb b--gray bw1 ">Total Sales</th>
                  </tr>
                </thead>
                <tbody className="lh-copy f4-ns f6">
                  <tr className="dim">
                    <td className="pa1">{formatDate(new Date(), 'shorter')}</td>
                    <td className="pa1">
                      <a href="" className="white no-underline">
                        hassan@company.co
                      </a>
                    </td>
                    <td className="pa1">1</td>
                    <td className="pa1">{formatPrice('174')}</td>
                  </tr>
                  <tr className="dim">
                    <td className="pa1  bt b--gray">
                      {formatDate(new Date(), 'shorter')}
                    </td>
                    {/* <td className="pa1 bt b--gray">Taral Hicks</td> */}
                    <td className="pa1 bt b--gray">
                      <a href="" className="white no-underline">
                        taral@company.co
                      </a>
                    </td>
                    <td className="pa1 bt b--gray">2</td>
                    <td className="pa1 bt b--gray">{formatPrice('14')}</td>
                  </tr>
                  <tr className="dim">
                    <td className="pa1  bt b--gray">
                      {formatDate(new Date(), 'shorter')}
                    </td>
                    {/* <td className="pa1 bt b--gray">Tyrin Turner</td> */}
                    <td className="pa1 bt b--gray">ty@companyn.co</td>
                    <td className="pa1 bt b--gray">4</td>
                    <td className="pa1 bt b--gray">{formatPrice('17')}</td>
                  </tr>
                  <tr className="dim">
                    <td className="pa1  bt b--gray">
                      {formatDate(new Date(), 'shorter')}
                    </td>
                    {/* <td className="pa1 bt b--gray">Oliver Grant</td> */}
                    <td className="pa1 bt b--gray">oliverg@companyn.co</td>
                    <td className="pa1 bt b--gray">1</td>
                    <td className="pa1 bt b--gray">{formatPrice('34')}</td>
                  </tr>
                  <tr className="dim">
                    <td className="pa1 bt b--gray">
                      {formatDate(new Date(), 'shorter')}
                    </td>
                    {/* <td className="pa1 bt b--gray">Dean Blanc</td> */}
                    <td className="pa1 bt b--gray">dean@companyain.co</td>
                    <td className="pa1 bt b--gray">2</td>
                    <td className="pa1">{formatPrice('174')}</td>
                  </tr>
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
