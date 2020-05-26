import * as React from 'react';
import classnames from 'classnames';
import { formatDate, formatPrice } from '../../../lib';

interface EventProps {
  events: any;
}
export const MyEvents: React.FunctionComponent<EventProps> = ({ events }) => {
  console.log(events);
  return (
    <div className={'w-100 vh-100'}>
      <div className="mw8 ml4-ns ">
        <h1 className="f1-ns f2 mt0">Manage Events</h1>
      </div>
      <main className="mw8 ml4-ns center">
        {events.map((curr) => {
          const live = new Date(curr.startDate) > new Date();
          return (
            <article className="dt w-90 bb b--gray pb2 mt2">
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
                  {formatPrice('58')} Total
                </h1>
                <h1 className="f6 f5-ns fw7 lh-title gray mv0">7 Tixs Sold</h1>
                {/* <h2 className="f6 fw6 mt0 mb0 gray">Los Angeles</h2> */}
              </div>
            </article>
          );
        })}
        <article className="dt w-90 bb b--gray pb2 mt2">
          <div className="dtc w2 w3-ns v-mid">
            <img
              src="https://s1.ticketm.net/dam/a/5d5/bcaf1027-1df0-4ea8-8366-6876e84b15d5_1315141_RETINA_PORTRAIT_16_9.jpg"
              className="db h3"
            />
          </div>
          <div className="dtc v-mid pl3">
            <h1 className="f6 f5-ns fw7 lh-title mv0">
              <a
                className="white no-underline"
                href="/dashboard/manage/freshly"
              >
                Tierra Whack
              </a>
            </h1>
            <h2 className="f6 fw6 mt0 mb0 gray">{formatDate(new Date())}</h2>
            <h2 className="f6 fw6 mt0 mb0 red">• Sale Ended</h2>
          </div>
          <div className="dtc v-mid tr">
            <h1 className="f6 f5-ns fw7 lh-title mv0">
              {formatPrice('20')} Total
            </h1>
            <h1 className="f6 f5-ns fw7 lh-title gray mv0">14 Tixs Sold</h1>
            {/* <h2 className="f6 fw6 mt0 mb0 gray">Los Angeles</h2> */}
          </div>
        </article>
      </main>
    </div>
  );
};
