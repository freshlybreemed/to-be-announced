import * as React from 'react';
import { useState, useRef } from 'react';
import FadeIn from 'react-fade-in';
import Reward from 'react-rewards';
import { stripeClient, formatEventTime } from '../../lib';
import { TicketCheckoutForm } from './TicketCheckoutForm';
import { UserCheckoutForm } from './UserCheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { EventProps } from '../../@types/types';
import classnames from 'classnames';
const stripePromise = loadStripe(stripeClient);

interface EventViewProps {
  event: EventProps;
}

export const Event: React.FunctionComponent<EventViewProps> = ({ event }) => {
  const [step, setStep] = useState<number>(0);
  const [cart, setCart] = useState<any>({});
  const [total, setTotal] = useState<number>(0);
  const reward = useRef<any>(null);

  const setMode = (step: number) => {
    setStep(step);
    if (reward.current && step === 4) {
      reward.current.rewardMe();
    }
    // this.reward.punishMe();
  };
  let tixs = {};
  Object.keys(event.ticketTypes).map((curr) => {
    tixs[curr] = event.ticketTypes[curr];
  });
  const [tickets] = useState<any>(tixs);
  // console.log(event);
  return (
    <Elements stripe={stripePromise}>
      <main className="mw9 ml4-ns center">
        <img className="w-100 center db" src={event.image} />
        <article className="dt-ns tc tl-ns w-90-l w-100-m  pb2 mv3">
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
                new Date(event.endDate),
              )}`}
            </div>
            <h2 className="f4-ns f5 fw6 mv0 green">• Live</h2>
          </div>
          {step < 3 && (
            <div className="dtc-l v-mid tr-l tc f2-l f3 fw6">
              <div
                onClick={() => (step === 0 ? setMode(1) : setMode(0))}
                className={`dib-l ${classnames({
                  'bg-green': step === 0,
                  'bg-red': step > 0,
                  'bg-animate': step >= 0,
                  // 'o- /': step > 0,
                })} no-underline white  noselect br-100  pa2 mr2 mt2-l ph4 mt2 `}
              >
                {step === 0 ? 'Get Tickets' : 'Cancel'}
              </div>
            </div>
          )}
        </article>
        <div className="flex flex-wrap justify-between w-100 nr3 mv3 pv3">
          {step === 4 && (
            <div className="w-100 dib">
              <div className="tc">
                <Reward
                  ref={(ref) => {
                    reward.current = ref;
                  }}
                  config={{ spread: 150, lifetime: 400, elementCount: 350 }}
                  type="confetti"
                ></Reward>
              </div>
              <FadeIn>
                <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv4">
                  Confirmation
                </span>
                <div className="pb4 f3-ns f4  tc lh-title">
                  <div className="mb1 f1-ns f2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // width="24"
                      height="36"
                      fill="currentColor"
                      className="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z" />
                    </svg>
                    {'  '}
                    Thanks for your order!
                  </div>
                  <span className="b">
                    Order{' '}
                    <a className="white no-underline" href="">
                      #1354025632
                    </a>
                  </span>
                  <p>
                    We've sent a confirmation email with details to your email.
                  </p>
                  <p className="gray">Questions? Text support to 411</p>
                </div>
              </FadeIn>
            </div>
          )}
          {step === 3 && (
            <div className="w-100 dib">
              <FadeIn>
                <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv4">
                  Checkout
                </span>
                <div className="vh-50 dt center">
                  <div className="v-mid dtc">
                    <i className="fa-6x fa fa-spinner fa-spin mr2" />
                  </div>
                </div>
              </FadeIn>
            </div>
          )}
          {step === 2 && (
            <div className="w-100 dib">
              <FadeIn>
                <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv4">
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
          {step === 1 && (
            <div className="w-100 dib">
              <FadeIn>
                <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv4">
                  Tickets
                </span>
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
              <section className="fl w-48-l w-100 ">
                <div className="pl0 ">
                  <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 ">
                    Description
                  </span>
                  <div
                    className="pt2-ns mt2 pt1 f3-ns f4 lh-title "
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  />
                </div>
              </section>
              <section className="fl w-48-l w-100 mv2 mv0-ns mv2 pl3-l">
                <div className="mt3 mt0-ns ">
                  <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 ">
                    Line Up
                  </span>
                  <div className="pt2-ns mt4 pt1">
                    <img
                      className="db mw-100 "
                      src="https://wikibirthday.com/wp-content/uploads/2018/11/Chase-B-Wiki-Bio-Age-Height-Net-Worth-2018.jpg"
                      alt=""
                    />
                    <p>
                      <strong> OG Chase B, </strong>
                      <a
                        className="no-underline white"
                        href="https://instagram.com/ogchaseb"
                        target="_blank"
                      >
                        @ogchaseb
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
                        href="https://instagram.com/wheresnasty"
                        target="_blank"
                      >
                        @wheresnasty
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
                        href="https://instagram.com/djstephcakes"
                        target="_blank"
                      >
                        @djstephcakes
                      </a>
                      <br />
                    </p>
                  </div>
                </div>
              </section>
            </FadeIn>
          </div>
        </div>
      </main>
    </Elements>
  );
};
