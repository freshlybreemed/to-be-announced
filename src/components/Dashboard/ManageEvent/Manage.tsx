import * as React from 'react';
import { formatDate, formatPrice, formatTime } from '../../../lib';

interface EventProps {
  event: {
    name: string;
    image: string;
    location: any;
    startDate: string;
    slug: string;
  };
}
export const ManageEvent: React.FunctionComponent<EventProps> = ({ event }) => {
  console.log(event);
  return (
    <div className={'w-100'}>
      <main className="mw8 ml4-ns center">
        <article className="dt w-90  pb2 mt2">
          <div className="dtc w2 w3-ns v-mid">
            <img src={event.image} className="db h3 h4-ns" />
          </div>
          <div className="dtc v-mid pl3">
            <h1 className="f4 f3-ns fw7 lh-title mv0 underline-hover">
              <a className="white no-underline">{event.name}</a>
            </h1>
            <h2 className="f4 fw6 lh-title mv0 underline-hover">
              <a
                className="white no-underline"
                target="_blank"
                href={`https://www.google.com/maps/place/?q=place_id:${event.location.placeId}`}
              >
                {event.location.venue}
              </a>
            </h2>
            <h2 className="f4 fw6 mt0 mb0 gray">
              {`${formatDate(new Date(event.startDate), 'long')} ${formatTime(
                new Date(event.startDate)
              )}`}
            </h2>
            <h2 className="f4 fw6 mt0 mb0 green">• Live</h2>
          </div>
          <div className="dtc v-mid tr">
            <a
              href={`/e/${event.slug}`}
              className="b--white dib no-underline white noselect dim br-100 b--solid pa2 mb2 ph4 f3 fw5 "
            >
              View Event
            </a>
          </div>
        </article>
        <div className="flex flex-wrap items-center  nr3 mb4">
          <article className="mw8 bg-black-80 br3 w-33-ns w-100 pa3 pa4-ns mv3 ba b--gray mr3">
            <div className="tc">
              <svg
                className="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
              >
                <path d="M12.628 21.412l5.969-5.97 1.458 3.71-12.34 4.848-4.808-12.238 9.721 9.65zm-1.276-21.412h-9.352v9.453l10.625 10.547 9.375-9.375-10.648-10.625zm4.025 9.476c-.415-.415-.865-.617-1.378-.617-.578 0-1.227.241-2.171.804-.682.41-1.118.584-1.456.584-.361 0-1.083-.408-.961-1.218.052-.345.25-.697.572-1.02.652-.651 1.544-.848 2.276-.106l.744-.744c-.476-.476-1.096-.792-1.761-.792-.566 0-1.125.227-1.663.677l-.626-.627-.698.699.653.652c-.569.826-.842 2.021.076 2.938 1.011 1.011 2.188.541 3.413-.232.6-.379 1.083-.563 1.475-.563.589 0 1.18.498 1.078 1.258-.052.386-.26.763-.621 1.122-.451.451-.904.679-1.347.679-.418 0-.747-.192-1.049-.462l-.739.739c.463.458 1.082.753 1.735.753.544 0 1.087-.201 1.612-.597l.54.538.697-.697-.52-.521c.743-.896 1.157-2.209.119-3.247zm-9.678-7.476c.938 0 1.699.761 1.699 1.699 0 .938-.761 1.699-1.699 1.699-.938 0-1.699-.761-1.699-1.699 0-.938.761-1.699 1.699-1.699z" />
              </svg>
              <h1 className="f3 mb2">Net Sales</h1>
              <h2 className="f5 fw4 gray mt0">$123.00</h2>
            </div>
          </article>
          <article className="mw8 bg-black-80 br3 w-33-ns w-100 pa3 pa4-ns mv3 ba b--gray mr3">
            <div className="tc">
              <svg
                className="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
              >
                <path d="M23 8c0-.552-.447-1-1-1h-12c-.552 0-1 .448-1 1v15c0 .553.448 1 1 1h12c.553 0 1-.447 1-1v-15zm-12 14h10v-13h-10v13zm2-2h6v-1h-6v1zm3.751-15h-2.207l-1.245-2.671-9.97 4.649 3.671 7.873v4.731l-5.906-12.665c-.064-.137-.094-.28-.094-.422 0-.376.214-.737.578-.907l11.781-5.494c.137-.064.281-.094.422-.094.377 0 .738.214.907.578l2.063 4.422zm-.751 5.086c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4m-1.587 5.331l.005.025c.121.53.27.968.542 1.488-.759-.28-1.327-.767-1.723-1.513h1.176zm2.255 0c-.147.575-.353 1.02-.668 1.504-.329-.5-.525-.951-.668-1.504h1.336zm2.094 0c-.391.736-1.001 1.241-1.717 1.502.26-.496.439-1.012.542-1.502h1.175zm.299-1.938h-1.361c.031.32.034.726.013 1.042h1.348c.056-.346.055-.696 0-1.042m-2.261 0h-1.601c-.037.364-.038.757-.013 1.042h1.628c.027-.342.02-.703-.014-1.042m-2.5 0h-1.361c-.056.346-.056.696 0 1.042h1.348c-.023-.368-.017-.667.01-1.016l.003-.026zm4.462-.896c-.398-.745-.999-1.245-1.748-1.513.247.485.413.97.539 1.492l.005.021h1.204zm-2.127 0c-.155-.565-.346-1.01-.635-1.497-.271.428-.507 1.011-.636 1.497h1.271zm-3.398 0h1.205c.117-.521.32-1.065.548-1.523-.772.273-1.353.772-1.753 1.523" />
              </svg>
              <h1 className="f3 mb2">Tickets Sold</h1>
              <h2 className="f5 fw4 gray mt0">73</h2>
            </div>
          </article>

          <article className="mw8 bg-black-80 br3 w-33-ns w-100 pa3 pa4-ns mv3 ba b--gray">
            <div className="tc">
              <svg
                className="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
              >
                <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z" />
              </svg>
              <h1 className="f3 mb2">Page Views</h1>
              <h2 className="f5 fw4 gray mt0">313</h2>
            </div>
          </article>
        </div>
        <section className="fl w-100 ">
          <div className="bg-black-80  pa3 pa4-ns br3 b--gray ba">
            <h1 className="f3 mb0">Attendee List </h1>
            <div className="pt3 ">
              <div className="overflow-auto">
                <table className="f6 w-100 mw8 center">
                  <thead>
                    <tr className="bg-gray f4">
                      <th className="fw6 tl pa3">Date</th>
                      <th className="fw6 tl pa3 ">Email</th>
                      <th className="fw6 tl pa3 ">Tickets</th>
                      <th className="fw6 tl pa3 ">Total Sales</th>
                    </tr>
                  </thead>
                  <tbody className="lh-copy">
                    <tr className="stripe-dark">
                      <td className="pa3">Hassan Johnson</td>
                      <td className="pa3">@hassan</td>
                      <td className="pa3">hassan@companywithalongdomain.co</td>
                      <td className="pa3">{formatPrice('14419232532474')}</td>
                    </tr>
                    <tr className="stripe-dark">
                      <td className="pa3">Taral Hicks</td>
                      <td className="pa3">@hicks</td>
                      <td className="pa3">taral@companywithalongdomain.co</td>
                      <td className="pa3">72326219423551</td>
                    </tr>
                    <tr className="stripe-dark">
                      <td className="pa3">Tyrin Turner</td>
                      <td className="pa3">@tt</td>
                      <td className="pa3">ty@companywithalongdomain.co</td>
                      <td className="pa3">92325170324444</td>
                    </tr>
                    <tr className="stripe-dark">
                      <td className="pa3">Oliver Grant</td>
                      <td className="pa3">@oli</td>
                      <td className="pa3">oliverg@companywithalongdomain.co</td>
                      <td className="pa3">71165170352909</td>
                    </tr>
                    <tr className="stripe-dark">
                      <td className="pa3">Dean Blanc</td>
                      <td className="pa3">@deanblanc</td>
                      <td className="pa3">dean@companywithalongdomain.co</td>
                      <td className="pa3">71865178111909</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
