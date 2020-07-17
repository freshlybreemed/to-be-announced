import * as React from 'react';
import { formatDate, formatPrice, formatTime } from '../../lib';
import FadeIn from 'react-fade-in';
import classnames from 'classnames';
import { EventProps, TicketProps } from '../../@types/types';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
interface MyEventsProps {
  events: EventProps[];
}

const getLowestPrice = (ticketTypes: { [ticketName: string]: TicketProps }) => {
  const tickets = Object.keys(ticketTypes).map((curr) => ticketTypes[curr]);
  const lowestPrice = tickets.reduce((acc, curr) =>
    acc.price < curr.price && curr.enabled && curr.sold < curr.quantity
      ? acc
      : curr
  ).price;

  return formatPrice(lowestPrice.toString());
};

export const Events: React.FunctionComponent<MyEventsProps> = ({ events }) => {
  const isMounted = useMounted();
  const isL = useMediaQuery({ query: '(min-width: 60em)' });
  const isM = useMediaQuery({
    query: '(max-width: 60em) and (min-width: 40em)',
  });
  const isS = useMediaQuery({
    query: '(max-width: 40em)',
  });
  return (
    <div className={`pv3 relative`}>
      <div className=" ml4-ns ">
        <h1 className="f1-ns f2 ">Find upcoming events near you </h1>
        <div className="bg-near-black overflow-hidden pa2 pa3-ns br3 ">
          <div className="mb4 ph2 ">
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
              className="pa2 bt-0 br-0 bl-0 input-reset bb bg-transparent white w-70-l w-50-m w-40 mr3"
              placeholder="Search events"
            />
            <a className="tr b--white dib noselect dim br-100 b--solid pa2 mb2 ph3-ns ph2 f3-l f5-m f6 fw5-ns fw4 mr3">
              Search
            </a>
          </div>
          {isMounted ? (
            <FadeIn>
              <div
                className="center"
                style={{
                  display: 'grid',
                  gridTemplateColumns: `${classnames({
                    'repeat(3, 1fr)': isL,
                    'repeat(2, 1fr)': isM,
                    'repeat(1, 1fr)': isS,
                  })}`,
                  gridColumnGap: classnames({
                    '32px': isL,
                    '16px': isM,
                    '8px': isS,
                  }),
                  gridRowGap: classnames({ '64px': isL, '32px': isM || isS }),
                  boxSizing: 'inherit',
                }}
              >
                {events.map((curr: EventProps, ind) => (
                  <div className="w-100 mb3" key={ind}>
                    <a className="white no-underline" href={`/e/${curr.slug}`}>
                      <div
                        className="w-100 relative flex"
                        style={{ boxSizing: 'inherit' }}
                      >
                        <div
                          style={{
                            backgroundImage: `url("${curr.image}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            top: '0px',
                            left: '0px',
                            width: '300px',
                            height: '200px',
                          }}
                          className="o-100  "
                        ></div>
                      </div>
                      <h4 className="f5 fw4 mb0">
                        {formatDate(new Date(curr.startDate))}
                        {' — '}
                        {formatTime(new Date(curr.startDate),curr.location.timeZoneId)}
                      </h4>
                      <h4 className="f4 fw8 mt2 mb0 ttu">{curr.name}</h4>
                      <h4 className="f5 fw6 mt1 pt1 ">
                        {getLowestPrice(curr.ticketTypes)} -{' '}
                        {curr.location.venue}
                      </h4>
                    </a>
                    <a
                      href={`/e/${curr.slug}`}
                      className="bg-black white br-100 pa2 tc f4-ns f6 fw6-ns fw5 grow no-underline ph4 b--solid "
                    >
                      Get Tickets
                    </a>
                  </div>
                ))}
              </div>
            </FadeIn>
          ) : (
            <div className="f1 tc">
              <i className="fa fa-spinner fa-spin  " />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
