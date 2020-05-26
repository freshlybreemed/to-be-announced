import * as React from 'react';
import { useState } from 'react';
import FadeIn from 'react-fade-in';
import { stripeClient, formatEventTime } from '../../lib';
import { TicketCheckoutForm } from './TicketCheckoutForm';
import { UserCheckoutForm } from './UserCheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { EventProps } from '../../@types/types';

const stripePromise = loadStripe(stripeClient);

interface EventViewProps {
  event: EventProps;
}

export const Event: React.FunctionComponent<EventViewProps> = ({ event }) => {
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
      <main className="mw9 ml4-ns center">
        <img className="w-100 center db" src={event.image} />

        <article className="dt-ns tc tl-ns w-90-l w-100-m  pb2 mv3">
          {/* <div className="dtc-l dtc-m v-mid ">
            <img src={event.image} className="db w-90" />
          </div> */}
          <div className="dtc-l  pt2-m  v-mid f3-l f5 fw7">
            <div className=" lh-title mb0 mt0-ns underline-hover">
              <a className="white no-underline f1-ns f2">{event.name}</a>
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
            <div className="f4-ns f5 fw6 lh-title mv0 underline-hover">
              <a
                className="white no-underline"
                target="_blank"
                href={`https://www.google.com/maps/place/?q=place_id:${event.location.placeId}`}
              >
                {`${event.location.address.split(',')[1]}, ${
                  event.location.address.split(',')[2].split(' ')[1]
                }`}{' '}
              </a>
            </div>
            <div className="f4-ns f5 fw6 mv0 gray">
              {`${formatEventTime(
                new Date(event.startDate),
                new Date(event.endDate)
              )}`}
            </div>
            <h2 className="f4-ns f5 fw6 mv0 green">• Live</h2>
          </div>
          <div className="dtc-l v-mid tr-l tc f2-l f3 fw6">
            <div
              onClick={() => setMode(1)}
              className="b--white dib-l   no-underline white noselect dim br-100 b--solid pa2 mr2 mt2-l ph4 mt2 "
            >
              Get Tickets
            </div>
          </div>
        </article>
        <div className="flex flex-wrap justify-between w-100 nr3 mb4">
          {mode === 2 && (
            <div className="w-100 dib">
              <FadeIn>
                <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv2">
                  Checkout
                </span>

                <UserCheckoutForm
                  setMode={setMode}
                  total={total}
                  event={event}
                  cart={cart}
                />
              </FadeIn>
            </div>
          )}
          {mode === 1 && (
            <div className="w-100 dib">
              <FadeIn>
                {/* <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv2">
                  Tickets
                </span> */}
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
          <div className=" dib">
            <FadeIn>
              <section className="fl w-48-l w-100 mb2 ">
                <div className=" pl0 ">
                  <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv2">
                    Description
                  </span>
                  <div
                    className="pt2-ns pt1"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  />
                </div>
              </section>
              <section className="fl w-48-l w-100 mb2 pl3-l">
                <div className=" ">
                  <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv2">
                    Line Up
                  </span>

                  <p className="pt2-ns pt1">
                    <img
                      className="db mw-100 "
                      src="https://wikibirthday.com/wp-content/uploads/2018/11/Chase-B-Wiki-Bio-Age-Height-Net-Worth-2018.jpg"
                      alt=""
                    />
                    <p>
                      <strong> OG Chase B, </strong>
                      <a
                        className="no-underline white"
                        href="https://twitter.com/williamchanner"
                        target="_blank"
                      >
                        @williamchanner
                      </a>
                      <br />
                    </p>
                    <img
                      className="db mw-100 "
                      src="https://images.squarespace-cdn.com/content/v1/53d1dfbae4b039a3a0158351/1571371316055-UBE44B0C76GNTAA38875/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/675E1F44-FA8D-4762-8335-F862013AE729-10830-000009C3559CD954.JPG"
                      alt=""
                    />
                    <p>
                      <strong>Where's Nasty, </strong>
                      <a
                        className="no-underline white"
                        href="https://twitter.com/timothyachumba"
                        target="_blank"
                      >
                        @timothyachumba
                      </a>
                      <br />
                    </p>
                    <img
                      className="db mw-100 "
                      src="https://i1.sndcdn.com/avatars-000323351569-5jjgjf-t500x500.jpg"
                      alt=""
                    />
                    <p>
                      <strong>DJ Steph Cakes, </strong>
                      <a
                        className="no-underline white"
                        href="https://twitter.com/timothyachumba"
                        target="_blank"
                      >
                        @timothyachumba
                      </a>
                      <br />
                    </p>
                  </p>
                </div>
              </section>
            </FadeIn>
          </div>
        </div>
      </main>

      {/* <div className="db mw6 mw8-ns mv3 page f4-ns">
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
     */}
    </Elements>
  );
};
