import * as React from 'react';
import QRCode from 'qrcode.react';
import NoSSR from 'react-no-ssr';
import {
  formatPrice,
  formatEventDateTime,
  getOrderTicketCount,
} from '../../../lib';
import { EventProps, OrderProps } from '../../../@types/types';

interface AttendeesProps {
  event: EventProps;
  order: OrderProps;
}
export const ManageOrder: React.FunctionComponent<AttendeesProps> = ({
  event,
  order,
}) => {
  return (
    <div className={'w-100'}>
      <main className="mw9 ml4-ns center">
        <article className="dt tc tl-ns w-90-l w-100-m  pb2 mv2">
          <div className="dtc-l dtc-m pl3-l pt2-m pb2 v-mid  fw7">
            <div className="mb3">
              <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv2">
                Order Details
              </span>
            </div>
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
                  event.location.timeZoneId
                )}`}
              </span>
            </div>
          </div>
          <div className="w-auto-m dtc" />
        </article>

        <section className="w-100 ">
          <div className="bg-black-80">
            <div className="dtc-l dtc-m v-mid tr f5-l f6 fw5 ">
              <a
                href={`/e/${event.slug}`}
                className="b--white dib no-underline white noselect dim br-100 b--solid pa2 mt2-l ph3 mr2"
              >
                Refund
              </a>
              <a
                href={`/dashboard/edit/${event.slug}`}
                className="b--white dib no-underline white noselect dim br-100 b--solid pa2 mr2 mt2-l ph3 mt2"
              >
                Edit Info
              </a>
            </div>
            <div className="pt4 pr2-ns mr3-ns">
              <table
                className="f6-ns f7 w-100  pb2 center"
                style={{ borderCollapse: 'collapse' }}
              >
                <thead>
                  <tr className="f5-ns f6 fw7 tl">
                    <th className="pa1 bb b--gray bw1 ">Ticket Buyer</th>
                    <th className="pa1 bb b--gray bw1  ">Quantity</th>
                    <th className="pa1 bb b--gray bw1 ">Total Sales</th>
                  </tr>
                </thead>
                <tbody className="lh-copy f4-l f5-m f6">
                  {
                    <tr className={`dim noselect `}>
                      <td className="pa1">
                        {`${order.firstName} ${order.lastName}`}
                      </td>

                      <td className="pa1">{getOrderTicketCount(order.cart)}</td>
                      <td className="pa1">
                        {formatPrice(order.total.toString(), true)}
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {order.tickets.map((curr) => {
          return (
            <div className="mt3 pa3 bg-white black">
              <article className="dt tc tl-ns w-90-l w-100-m  pb2 mv2">
                <div className="dtc-l dtc-m pl3-l pt1-m pb2 v-mid  fw7">
                  <div className=" lh-title f4 mv1 underline-hover">
                    <a className="black no-underline">{event.name}</a>
                  </div>
                  <div className="f6-ns f7 fw6 lh-title mv1 underline-hover">
                    <NoSSR>
                      <a
                        className="gray no-underline"
                        target="_blank"
                        href={`https://www.google.com/maps/place/?q=place_id:${event.location.placeId}`}
                      >
                        {event.location.venue}
                      </a>
                    </NoSSR>
                  </div>
                  <div className="mv1">
                    <span className="f6-ns f7 fw5 mv0 gray">
                      {`${formatEventDateTime(
                        new Date(event.startDate),
                        new Date(event.endDate),
                        event.location.timeZoneId
                      )}`}
                    </span>
                  </div>
                  <div className="justify-space flex">
                    <div className={`f6-ns f7 fw6 pt1 mt1 mb0`}>Name</div>
                    <div className={`f4-ns f5 fw6 mv0`}>
                      {`${order.firstName} ${order.lastName}`}
                    </div>
                    <h3 className={`f6-ns f7 fw6 pt1 mt1 mb0`}>Ticket type</h3>
                    <h3 className={`f4-ns f5 fw6 mv0`}>{`${curr}`}</h3>
                  </div>
                </div>
                <div className="w-auto-m dtc" />

                <div className="dtc-l dtc-m v-mid  tr">
                  <QRCode
                    className="v-mid"
                    value="http://www.socialticketing.com"
                    renderAs="svg"
                    size={115}
                  />
                  <div className="tc">{curr.barCode}</div>
                </div>
              </article>
            </div>
          );
        })}
      </main>
    </div>
  );
};
