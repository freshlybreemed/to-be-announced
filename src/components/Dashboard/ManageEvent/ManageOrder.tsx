import * as React from 'react';
import QRCode from 'qrcode.react';
import NoSSR from 'react-no-ssr';
import {
  formatPrice,
  formatEventDateTime,
  getOrderTicketCount,
  formatDate,
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
      <main className="mw9 ml4-ns ph3-l center">
        <article className="dt tc tl-ns w-90-l w-100-m  pb2 mv2">
          <div className="dtc-l dtc-m  pt2-m pb2 v-mid  fw7">
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
                Purchase Date: {`${formatDate(order.orderDate)}`}
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
            <div className="w-80 ma2 black dib">
              <div
                style={{
                  borderRadius: '8px',
                }}
                className="bg-light-gray h-25 fl relative pa2 mt1 bt w-80"
              >
                <h3
                  className="mv2 pv3"
                  style={{
                    background:
                      'linear-gradient(to bottom, #e84c3d 0%, #e84c3d 26%, #ecedef 26%, #ecedef 100%)',
                  }}
                >
                  Social <span className="normal">Ticketing</span>
                </h3>
                <div className="fl">
                  <div className="ttu  mt3">
                    <h4 className="mv0">{event.name}</h4>
                    <span className="normal f7 gray">Event</span>
                  </div>
                  <div className="ttu mt2">
                    <h4 className="mv0">{`${order.firstName} ${order.lastName}`}</h4>
                    <span className="normal f7 gray">Name</span>
                  </div>
                  <div className="ttu fl mt2">
                    <h4 className="mv0">{curr.ticketName}</h4>
                    <span className="normal f7 gray">Ticket</span>
                  </div>
                  <div className="ttu fl mt2 ml2">
                    <h4 className="mv0">3PM</h4>
                    <span className="normal f7 gray">Time</span>
                  </div>
                </div>
                <QRCode
                  className="v-mid fr"
                  value={`http://www.socialticketing.com/ticket/${curr.barCode}`}
                  renderAs="svg"
                  size={80}
                />{' '}
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};
