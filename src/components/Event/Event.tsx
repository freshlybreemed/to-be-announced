import * as React from 'react';
import { useState, useRef } from 'react';
import FadeIn from 'react-fade-in';
import Reward from 'react-rewards';
import { formatEventTime, formatDate } from '../../lib';
import { TicketCheckoutForm, UserCheckoutForm } from './';
import { EventProps } from '../../@types/types';
import classnames from 'classnames';
import { PaymentCheckoutForm } from './PaymentCheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.STRIPE_DEV_CLIENT);

interface EventViewProps {
  event: EventProps;
}

export const Event: React.FunctionComponent<EventViewProps> = ({ event }) => {
  const [step, setStep] = useState<number>(0);
  const [cart, setCart] = useState<any>({});
  const [total, setTotal] = useState<number>(0);
  const [live] = useState<boolean>(new Date(event.startDate) > new Date());
  const reward = useRef<any>(null);

  let tixs = {};
  Object.keys(event.ticketTypes).map((curr) => {
    tixs[curr] = event.ticketTypes[curr];
  });
  const [tickets] = useState<any>(tixs);

  const setMode = (step: number) => {
    setStep(step);
    if (reward.current && step === 4) {
      reward.current.rewardMe();
    }
    // this.reward.punishMe();
  };

  return (
    <main className="mw9 ml4-ns center">
      <img className="w-100 center db" src={event.image} />
      <article className="dt-ns tc tl-ns w-90-l w-100-m  pb2 mv3">
        <div className="dtc-l  pt2-m  v-mid f3-l f5 fw7">
          <div className=" lh-title mb0 mt0-ns underline-hover">
            <a className="white no-underline f1-ns f2">{event.name}</a>
          </div>
          <table
            style={{ borderCollapse: 'collapse' }}
            // style={{ display: 'grid' }}
            className="f4-ns f5 fw6 lh-title mv1 center-s underline-hover white"
          >
            <tbody>
              <tr>
                <td rowSpan={2} className="mt0 pt1 v-top">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    className="pr1  "
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                  </svg>
                </td>
                <td>
                  <a
                    className=" v-top white  no-underline"
                    target="_blank"
                    href={`https://www.google.com/maps/place/?q=place_id:${event.location.placeId}`}
                  >
                    {event.location.venue}
                  </a>
                </td>
              </tr>
              <tr>
                <td className=" f4-ns f5 fw5 lh-solid mv0 underline-hover ">
                  <a
                    className="gray no-underline"
                    target="_blank"
                    href={`https://www.google.com/maps/place/?q=place_id:${event.location.placeId}`}
                  >
                    {`${event.location.address}. ${event.location.city}, ${event.location.state} ${event.location.zip} `}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            style={{ borderCollapse: 'separate' }}
            className="f4-ns f5 fw6 pt1 mt1 center-s  white"
          >
            <tbody>
              <tr>
                <td rowSpan={2} className="mt0 pt0 v-top">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    className="pr1 "
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                  </svg>
                </td>
                <td className="pt1 f4-ns f5 fw6 dtc lh-solid mv0 underline-hover">
                  {`${formatDate(new Date(event.startDate), 'short')}`}
                </td>
              </tr>
              <tr>
                <td className=" f4-ns f5 fw5 lh-solid mv0 underline-hover gray">
                  {`${formatEventTime(
                    new Date(event.startDate),
                    new Date(event.endDate),
                    event.location.timeZoneId
                  )}`}
                </td>
              </tr>
            </tbody>
          </table>
          {/* <h2
              className={`f4-ns f5 fw6 mv0 ${classnames({
                green: live,
                red: !live,
              })}`}
            >
              • {live ? `Live` : `Sale Ended`}
            </h2> */}
        </div>
        {step < 3 && (
          <div className="dtc-l v-mid tr-l tc f2-l f3 fw6">
            <div
              onClick={() => (step === 0 ? setMode(1) : setMode(0))}
              className={`dib-l ${classnames({
                'bg-green': step === 0 && live,
                'bg-red': step > 0 || !live,
                'bg-animate': step >= 0,
                // 'o- /': step > 0,
              })} no-underline white  noselect br-100  pa2 mr2 mt2-l ph4 mt2 `}
            >
              {!live ? 'Sale Ended' : step === 0 ? 'Get Tickets' : 'Cancel'}
            </div>
          </div>
        )}
      </article>
      <div className="flex flex-wrap justify-between w-100 nr3 mv3 pv3">
        <Elements stripe={stripePromise}>
          <div
            className={`w-100 ${classnames({
              dn: step !== 4,
            })}`}
          >
            <FadeIn>
              <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv4">
                Checkout
              </span>
              <PaymentCheckoutForm
                mode={step}
                setMode={setMode}
                total={total}
                event={event}
                cart={cart}
              />
            </FadeIn>
          </div>
        </Elements>
        {step === 5 && (
          <div className="w-100 dib">
            <div className="tc">
              <Reward
                ref={(ref) => {
                  reward.current = ref;
                }}
                config={{ spread: 150, lifetime: 400, elementCount: 350 }}
              />
            </div>
            <FadeIn>
              <span className="f3-l f4 br-100 b--solid pv2 ph3 ">
                Confirmation
              </span>
              <div className="pv4 f3-ns f4 tc lh-title">
                <div className="mv1 fw6 f1-ns f2">Thanks for your order!</div>
                <span className="b">
                  Order{' '}
                  <a className="white no-underline" href="">
                    #1354025632
                  </a>
                </span>
                <strong>
                  <p>
                    We've sent a confirmation email with details to your email.
                  </p>
                  <p className="gray">Questions? Text support to 411</p>
                </strong>
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
              <div className="mt3 mt2-ns ">
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
  );
};
