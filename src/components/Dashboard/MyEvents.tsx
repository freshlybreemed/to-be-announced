import * as React from 'react';
import { formatDate, formatPrice } from '../../lib';

const events = [
  {
    image:
      'https://s1.ticketm.net/dam/a/5d5/bcaf1027-1df0-4ea8-8366-6876e84b15d5_1315141_RETINA_PORTRAIT_16_9.jpg',
    title: 'Chicken & Mumbo Sauce',
    totalSales: '85',
    status: 'Live',
    tixsSold: 19,
  },
  {
    image:
      'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F91347047%2F6195246267%2F1%2Foriginal.20191005-003716?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=200%2C0%2C1600%2C800&s=35b1c012c592a60e6731375383f7a75a',
    title: 'Trap Karaoke',
    totalSales: '1085',
    status: 'Sale Ended',
    tixsSold: 869,
  },
];

export const MyEvents: React.FunctionComponent = () => (
  <div className={'w-100 vh-50'}>
    <div className="mw8 ml4-ns ">
      <h1 className="f1-ns f2 mt0">Manage Events</h1>
    </div>
    <main className="mw8 ml4-ns center bg-black">
      {events.map((curr) => (
        <article className="dt w-90 bb b--gray pb2 mt2 ">
          <div className="dtc w2 w3-ns v-mid">
            <img src={curr.image} className="db h2 h3-ns" />
          </div>
          <div className="dtc v-mid pl3">
            <h1 className="f6 f5-ns fw7 lh-title mv0 underline-hover">
              <a className="white no-underline" href="">
                {curr.title}
              </a>
            </h1>
            <h2 className="f6 fw6 mt0 mb0 gray">{formatDate(new Date(2))}</h2>
            {curr.status === 'Live' && (
              <h2 className="f6 fw6 mt0 mb0 green">• {curr.status}</h2>
            )}
            {curr.status === 'Sale Ended' && (
              <h2 className="f6 fw6 mt0 mb0 red">• {curr.status}</h2>
            )}
          </div>
          <div className="dtc v-mid tr">
            <h1 className="f6 f5-ns fw7 lh-title mv0">
              {formatPrice(curr.totalSales)} Total
            </h1>
            <h1 className="f6 f5-ns fw7 lh-title gray  mv0">
              {curr.tixsSold} Tixs Sold
            </h1>
            {/* <h2 className="f6 fw6 mt0 mb0 gray">Los Angeles</h2> */}
          </div>
        </article>
      ))}
    </main>
  </div>
);
