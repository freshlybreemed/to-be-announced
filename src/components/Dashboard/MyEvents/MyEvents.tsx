import * as React from 'react';
import classnames from 'classnames';
import { formatDate, formatPrice, getTicketCount } from '../../../lib';
import { EventProps } from '../../../@types/types';

interface MyEventProps {
  events: EventProps[];
}

export const MyEvents: React.FunctionComponent<MyEventProps> = ({ events }) => {
  console.log(events);
  return (
    <div className={'w-100 vh-100'}>
      <div className="mw8 ml4-ns ">
        <h1 className="f1-ns f2 mt0">Manage Events</h1>
      </div>
      <main className="mw8 ml4-ns center">
        {events.map((curr, ind) => {
          const live = new Date(curr.startDate) > new Date();
          return (
            <article
              className={`dt w-90 ${classnames({
                bt: ind > 0,
              })} b--gray pb2 mt2`}
            >
              <div className="dtc w2 w3-ns v-mid">
                <img src={curr.image} className="db h3" />
              </div>
              <div className="dtc v-mid pl3">
                <h1 className="f6 f5-ns fw7 lh-title mv0 underline-hover">
                  <a
                    className="white no-underline"
                    href={`/dashboard/manage/${curr.slug}`}
                  >
                    {curr.name}
                  </a>
                </h1>
                <h2 className="f6 fw6 mt0 mb0 gray">
                  {formatDate(new Date(curr.startDate))}
                </h2>
                <h2
                  className={`f6 fw6 mt0 mb0 ${classnames({
                    green: live,
                    red: !live,
                  })}`}
                >
                  • {live ? `Live` : `Sale Ended`}
                </h2>
              </div>
              <div className="dtc v-mid tr">
                <h1 className="f6 f5-ns fw7 lh-title mv0">
                  {formatPrice(curr.gross.toString(), true)} Total
                </h1>
                <h1 className="f6 f5-ns fw7 lh-title gray mv0">
                  {getTicketCount(curr.ticketTypes)} Tixs Sold
                </h1>
                {/* <h2 className="f6 fw6 mt0 mb0 gray">Los Angeles</h2> */}
              </div>
            </article>
          );
        })}
        <article className={`dt w-90 bt b--gray pt4 mt2`}>
          <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv4">
            Create an Event
          </span>
        </article>
      </main>
    </div>
  );
};
