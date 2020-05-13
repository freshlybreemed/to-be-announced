import * as React from 'react';
import { formatDate } from '../lib';
interface EventProps {
  event: any;
}
export const Event: React.FunctionComponent<EventProps> = ({ event }) => {
  console.log(event.description);
  return (
    <div>
      <img className="w-90 center db" src={event.image} />
      <div className="db mw6 mw8-ns mv4 page f4-ns">
        <div className="mt2 mb4 about contain center w-90-l ph3 ph0-l ">
          <h3 className="gray mb1 pb1 f4">{`${event.organizer} presents `}</h3>
          <h1 className="f1 mt0 pt0">{event.title}</h1>
        </div>
        <div className="mt2 mb4 about contain center w-90-l ph3 ph0-l flex-l">
          <div className="w-40-l dib mb1 pb1">
            <p className="mv0 b pb1">{`${event.location.venue}`}</p>
            <p className="mv0">{`${event.location.address.split(',')[0]}`} </p>
            <p className="mt0">{`${event.location.address.split(',')[1]}, ${
              event.location.address.split(',')[2]
            } `}</p>

            <p className="b mb0">{`${formatDate(
              new Date(event.startDate)
            )} `}</p>
            {/* <p className=" mt0">{`${formatTime(
              new Date(event.startDate)
            )} - ${formatTime(new Date(event.endDate))}`}</p> */}

            <a className="b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph4 f3 fw5">
              Tickets
            </a>
          </div>
          <div className="w-60-l dib">
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
          </div>
        </div>

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
              <h4 className="fw5 f4 gray mb1 pb3">
                {formatDate(new Date('2020-04-24T01:21:01Z'))}
              </h4>
              <span className="b pa2 mt2 input-reset ba b--white grow pointer f4">
                <a className="no-underline white">More Info</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
