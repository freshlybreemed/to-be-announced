import * as React from 'react';
import { formatDate } from '../lib';
import FadeIn from 'react-fade-in';

const events = [
  {
    image:
      'https://s1.ticketm.net/dam/a/5d5/bcaf1027-1df0-4ea8-8366-6876e84b15d5_1315141_RETINA_PORTRAIT_16_9.jpg',
    title: 'Tierra Whack',
    date: formatDate(new Date()),
    city: 'Los Angeles',
    price: 'FREE',
    venue: 'YouTube',
  },
  {
    image:
      'https://s1.ticketm.net/dam/a/5d5/bcaf1027-1df0-4ea8-8366-6876e84b15d5_1315141_RETINA_PORTRAIT_16_9.jpg',
    title: 'Tierra Whack',
    date: formatDate(new Date()),
    city: 'Los Angeles',
    price: 'FREE',
    venue: 'YouTube',
  },
  {
    image:
      'https://s1.ticketm.net/dam/a/5d5/bcaf1027-1df0-4ea8-8366-6876e84b15d5_1315141_RETINA_PORTRAIT_16_9.jpg',
    title: 'Tierra Whack',
    date: formatDate(new Date()),
    city: 'Los Angeles',
    price: 'FREE',
    venue: 'YouTube',
  },
  {
    image:
      'https://s1.ticketm.net/dam/a/5d5/bcaf1027-1df0-4ea8-8366-6876e84b15d5_1315141_RETINA_PORTRAIT_16_9.jpg',
    title: 'Tierra Whack',
    date: formatDate(new Date()),
    city: 'Los Angeles',
    price: 'FREE',
    venue: 'YouTube',
  },
  {
    image:
      'https://s1.ticketm.net/dam/a/5d5/bcaf1027-1df0-4ea8-8366-6876e84b15d5_1315141_RETINA_PORTRAIT_16_9.jpg',
    title: 'Tierra Whack',
    date: formatDate(new Date()),
    city: 'Los Angeles',
    price: 'FREE',
    venue: 'YouTube',
  },
  {
    image:
      'https://s1.ticketm.net/dam/a/5d5/bcaf1027-1df0-4ea8-8366-6876e84b15d5_1315141_RETINA_PORTRAIT_16_9.jpg',
    title: 'Tierra Whack',
    date: formatDate(new Date()),
    city: 'Los Angeles',
    price: 'FREE',
    venue: 'YouTube',
  },
];
export const Events: React.FunctionComponent = () => (
  <div className={'pv3 '}>
    <div className="mw8 ml4-ns ">
      <h1 className="f1-ns f2 ">Find upcoming events near you </h1>

      <div className="mb4">
        <svg
          className="white mt3"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" />
        </svg>
        <input
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white w-50 mr3"
          placeholder="Search events"
        />
        <a className="b--white dib noselect dim br-100 b--solid pa2 mb2 ph4 f3 fw5 mr3">
          Search
        </a>
      </div>
    </div>
    <main className="mw8 ml4-ns center">
      {events.map((curr) => (
        <article className="dt w-90 bb b--gray pb2 mt2 bg-black">
          <div className="dtc w2 w3-ns v-mid">
            <img src={curr.image} className="db h2 h3-ns" />
          </div>
          <div className="dtc v-mid pl3">
            <h1 className="f6 f5-ns fw7 lh-title  mv0">{curr.title}</h1>
            <h2 className="f6 fw6 mt0 mb0 gray">{curr.date}</h2>
          </div>
          <div className="dtc v-mid tr">
            <h1 className="f6 f5-ns fw7 lh-title  ttu mv0">{curr.price}</h1>
            <h1 className="f6 f5-ns fw7 lh-title   mv0">{curr.venue}</h1>
            <h2 className="f6 fw6 mt0 mb0 gray">{curr.city}</h2>
          </div>
        </article>
      ))}
    </main>
  </div>
);
