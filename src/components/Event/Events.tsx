import * as React from 'react';
import { formatDate, formatPrice } from '../../lib';
import FadeIn from 'react-fade-in';
import classnames from 'classnames';
import { EventProps, TicketProps } from '../../@types/types';

interface MyEventsProps {
  events: EventProps[];
}
export const Events: React.FunctionComponent<MyEventsProps> = ({ events }) => {
  console.log(events);

  const getPrice = (ticketTypes: { [ticketName: string]: TicketProps }) => {
    const tickets = Object.keys(ticketTypes).map((curr) => ticketTypes[curr]);
    const lowestPrice = tickets.reduce((acc, curr) =>
      acc.price < curr.price && curr.enabled && curr.sold < curr.quantity
        ? acc
        : curr,
    ).price;

    return formatPrice(lowestPrice.toString());
  };
  return (
    <div className={`pv3 ${classnames({ 'vh-50': events.length > 3 })}`}>
      <div className="mw8 ml4-ns ">
        <h1 className="f1-ns f2 ">Find upcoming events near you </h1>
        <div className="bg-black-80  pa3 pa4-ns br3 b--gray ba">
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
          <main className="mw8 ml4-ns center">
            <FadeIn>
              {events.map((curr: EventProps, ind: number) => (
                <article className="dt w-90 bb b--gray pb2 mt2 bg-black dim">
                  <div className="dtc w2 w3-ns v-mid">
                    <img src={curr.image} className="db h2 h3-ns" />
                  </div>
                  <div className="dtc v-mid pl3">
                    <a
                      href={`/e/${curr.slug}`}
                      className="f6 f5-ns fw7 white no-underline lh-title underline-hover  mv0"
                    >
                      {curr.name}
                    </a>
                    <h2 className="f6 fw6 mt0 mb0 gray">
                      {formatDate(new Date(curr.startDate))}
                    </h2>
                  </div>
                  <div className="dtc v-mid tr">
                    <h1 className="f6 f5-ns fw7 lh-title  ttu mv0">
                      {getPrice(curr.ticketTypes)}
                    </h1>
                    <h1 className="f6 f5-ns fw7 lh-title   mv0">
                      {curr.location.venue}
                    </h1>
                    <h2 className="f6 fw6 mt0 mb0 gray">
                      {`${curr.location.address.split(',')[1]}, ${
                        curr.location.address.split(',')[2].split(' ')[1]
                      }`}
                    </h2>
                  </div>
                </article>
              ))}
            </FadeIn>
          </main>
        </div>
      </div>
    </div>
  );
};
