import * as React from "react";
import { formatDate, formatTime } from "../lib";
interface EventProps {
  event: any;
}
export const Event: React.FunctionComponent<EventProps> = ({ event }) => {
  return (
    <div className={"pv1"}>
      {/* <h1>
        I'm a freelance <span className="gothic">art director</span> and{" "}
        <span className="gothic">product designer</span> building digital
        experiences.
      </h1> */}
      <img className="w-100" src={event.image} />
      <div className="db mw6 mw8-ns mv4 page ">
        <div className="mt2 mb6 about contain center w-90-l ph3 ph0-l flex-l">
          <div className="w-40-l dib">
            <h3 className="gray">{`${event.organizer} presents `}</h3>
            <h1 className="f2">{event.title}</h1>
            <p className="mv0 b pb1">
              {`${event.location.name.split(",")[0]}`}{" "}
            </p>
            <p className="mv0">{`${event.location.streetAddress}`} </p>
            <p className="mt0">{`${event.location.city}, ${event.location.state} `}</p>

            <p className="b mb0">{`${formatDate(
              new Date(event.startDate)
            )} `}</p>
            <p className=" mt0">{`${formatTime(
              new Date(event.startDate)
            )} - ${formatTime(new Date(event.endDate))}`}</p>

            <a className="b--white dib noselect dim br-100 b--solid pa2 ph4 f3 fw5">
              Tickets
            </a>
          </div>
          <div className="w-60-l dib kirbytext">
            <p dangerouslySetInnerHTML={{ __html: event.description }} />
            <h2 className="ttu">Line Up</h2>
            <p>
              William Channer,{" "}
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
            <p>
              Timothy Achumba,{" "}
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
            <p>
              Iheanyi Ekechukwu,{" "}
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
          <section className="dib">
            <div className="fl w-50 w-25-ns mr3">
              <img
                className="db w-100"
                src="http://tachyons.io/img/5.jpg"
                alt="night sky over house"
              />
              <h3 className="ttu pb1 mb0">Hotel Room </h3>
              <h4 className="ttu gray mv1 pb3">
                {formatDate(new Date("2020-04-24T01:21:01Z"))}
              </h4>
              <span className="b pa2 mt2 input-reset ba b--white grow pointer f4">
                <a className="no-underline white">More Info</a>
              </span>
            </div>
            <div className="fl w-50 w-25-ns mr3">
              <img
                className="db w-100"
                src="http://tachyons.io/img/6.jpg"
                alt="night sky over water"
              />
              <h3 className="ttu pb1 mb0">Hotel Room </h3>
              <h4 className="ttu gray mv1 pb3">
                {formatDate(new Date("2020-04-24T01:21:01Z"))}
              </h4>
              <span className="b pa2 mt2 input-reset ba b--white grow pointer f4">
                <a className="no-underline white">More Info</a>
              </span>
            </div>
            <div className="fl w-50 w-25-ns mr3">
              <img
                className="db w-100"
                src="http://tachyons.io/img/3.jpg"
                alt="bay bridge at night"
              />
              <h3 className="ttu pb1 mb0">Hotel Room </h3>
              <h4 className="ttu gray mv1 pb3">
                {formatDate(new Date("2020-04-24T01:21:01Z"))}
              </h4>
              <span className="b pa2 mt2 input-reset ba b--white grow pointer f4">
                <a className="no-underline white">More Info</a>
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
