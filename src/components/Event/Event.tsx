import * as React from 'react';
import { useState } from 'react';
import FadeIn from 'react-fade-in';
import { stripeClient, formatEventTime } from '../../lib';
import { TicketCheckoutForm } from './TicketCheckoutForm';
import { UserCheckoutForm } from './UserCheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

interface EventProps {
  event: any;
}

const stripePromise = loadStripe(stripeClient);

export const Event: React.FunctionComponent<EventProps> = ({ event }) => {
  const [mode, setMode] = useState<number>(0);
  const [cart, setCart] = useState<any>({});
  const [total, setTotal] = useState<number>(0);

  let tixs = {};
  Object.keys(event.ticketTypes).map((curr) => {
    tixs[curr] = Object.assign({
      ticketName: event.ticketTypes[curr].ticketName,
      quantity: event.ticketTypes[curr].quantity,
      price: event.ticketTypes[curr].price,
      count: 0,
    });
  });
  const [tickets] = useState<any>(tixs);
  // console.log(event);
  return (
    <Elements stripe={stripePromise}>
      <img className="w-100 center db" src={event.image} />
      <div className="db mw6 mw8-ns mv3 page f4-ns">
        <div className="mt2 mb1  center w-90-l ph3 ph0-l ">
          <h3 className="gray mv0  f4-ns f5">{`TBA presents `}</h3>
          <h1 className="f1-ns f2 mv0 mb2 pt2">{event.name}</h1>
        </div>
        <div className=" mb2 center w-90-l ph3 ph0-l flex-l">
          <div className="w-40-l dib mb1 pb1">
            <p className="mv0 b pb1">{`${event.location.venue}`}</p>
            <p className="mv0">{`${event.location.address.split(',')[0]}`} </p>
            <p className="mt0">{`${event.location.address.split(',')[1]}, ${
              event.location.address.split(',')[2]
            } `}</p>

            <p className="b mb2">{`${formatEventTime(
              new Date(event.startDate),
              new Date(event.endDate),
            )}`}</p>
            {mode > 0 && (
              <span
                onClick={() => setMode(0)}
                className="b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph3  f3-ns f4 fw5-ns fw6 mr3"
              >
                Back
              </span>
            )}
            {mode === 0 && (
              <span
                onClick={() => setMode(1)}
                className="b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph3 f3-ns f4 fw5-ns fw6"
              >
                Tickets
              </span>
            )}
          </div>
          {mode === 0 && (
            <div className="w-60-l dib">
              <FadeIn>
                <div dangerouslySetInnerHTML={{ __html: event.description }} />
                <h2 className="ttu">Line Up</h2>
                <img
                  className="db mw-100 "
                  src="https://s1.ticketm.net/dam/a/5d5/bcaf1027-1df0-4ea8-8366-6876e84b15d5_1315141_RETINA_PORTRAIT_16_9.jpg"
                  alt=""
                />
                <p>
                  <strong> William Channer, </strong>
                  <a
                    className="no-underline white"
                    href="https://twitter.com/williamchanner"
                    target="_blank"
                  >
                    @williamchanner
                  </a>
                  <br />
                  Founder, Editor
                </p>
                <img
                  className="db mw-100 "
                  src="https://s1.ticketm.net/dam/a/5d5/bcaf1027-1df0-4ea8-8366-6876e84b15d5_1315141_RETINA_PORTRAIT_16_9.jpg"
                  alt=""
                />
                <p>
                  <strong>Timothy Achumba, </strong>
                  <a
                    className="no-underline white"
                    href="https://twitter.com/timothyachumba"
                    target="_blank"
                  >
                    @timothyachumba
                  </a>
                  <br />
                  Co-founder, Designer
                </p>
                <img
                  className="db mw-100 "
                  src="https://s1.ticketm.net/dam/a/5d5/bcaf1027-1df0-4ea8-8366-6876e84b15d5_1315141_RETINA_PORTRAIT_16_9.jpg"
                  alt=""
                />
                <p>
                  <strong>Iheanyi Ekechukwu, </strong>
                  <a href="https://twitter.com/kwuchu" target="_blank">
                    @kwuchu
                  </a>
                  <br />
                  Co-founder, Developer
                </p>
              </FadeIn>
            </div>
          )}
          {mode === 1 && (
            <div className="w-60-l w-100 dib">
              <FadeIn>
                <TicketCheckoutForm
                  cart={cart}
                  setCart={setCart}
                  ticketTypes={tickets}
                  setMode={setMode}
                  total={total}
                  setTotal={setTotal}
                />
              </FadeIn>
            </div>
          )}
          {mode === 2 && (
            <div className="w-60-l w-100 dib">
              <FadeIn>
                <UserCheckoutForm
                  setMode={setMode}
                  total={total}
                  eventName={event.name}
                  slug={event.slug}
                />
              </FadeIn>
            </div>
          )}
        </div>
        {mode === 0 && (
          <FadeIn>
            <div className="ph3">
              <h2 className="ttu">Related Events</h2>
              <ul className="overflow-hidden list v-base flex pl0 justify-center">
                <li className="mr3 mw-100 mw-48-l">
                  <a className="transition" href="/">
                    <img
                      className="db mw-100 "
                      src="https://s1.ticketm.net/dam/a/5d5/bcaf1027-1df0-4ea8-8366-6876e84b15d5_1315141_RETINA_PORTRAIT_16_9.jpg"
                      alt=""
                    />
                  </a>
                  <h3 className="fw5 f3-ns f4 mb0">Tierra Whack</h3>
                  <h4 className="fw5 gray f4-ns f5 mt1">The Wiltern, LA</h4>
                </li>
                <li className="mr3 mw-100 mw-48-l">
                  <a className="transition" href="/">
                    <img
                      className="db mw-100 "
                      src="https://s1.ticketm.net/dam/a/12d/520e1ff8-9df2-4847-bca7-668e25d5e12d_1286191_RETINA_PORTRAIT_16_9.jpg"
                      alt=""
                    />
                  </a>
                  <h3 className="fw5 f3-ns f4 mb0">Azizi Gibson</h3>
                  <h4 className="fw5 gray f4-ns f5 mt1">Bootsie Bellows, LA</h4>
                </li>

                <li className=" mw-100 mw-48-l">
                  <a className="transition" href="/">
                    <img
                      className="db mw-100 "
                      src="https://s1.ticketm.net/dam/a/040/997d0de0-af52-4455-bc48-813f05a4f040_1205621_RETINA_PORTRAIT_16_9.jpg"
                      alt=""
                    />
                  </a>
                  <h3 className="fw5 f3-ns f4 mb0">Trippe Redd</h3>
                  <h4 className="fw5 gray f4-ns f5 mt1">The Noho, LA</h4>
                </li>
              </ul>
            </div>
          </FadeIn>
        )}
      </div>
    </Elements>
  );
};
