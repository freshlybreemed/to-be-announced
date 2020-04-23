import * as React from "react";

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
      <div className="db w-100 page fixedPadding">
        <div className="mt2 mb6 about contain center w-90-l ph3 ph0-l flex-l">
          <div className="w-40-l dib">
            <h3 className="gray">{`${event.organizer} presents `}</h3>
            <h1 className="f2">{event.title}</h1>
            <p>{`${event.location.streetAddress} ${event.location.city}, ${event.location.state} `}</p>
            <a className="b--white dib br4 b--solid pa2 f3 fw5">Tickets</a>
          </div>
          <div className="w-60-l dib kirbytext">
            <p dangerouslySetInnerHTML={{ __html: event.description }}></p>
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
            <h2 className="ttu">Related Events</h2>
            <a className="flex relative justify-between ">
              {/* <div
                style={{
                  backgroundImage:
                    "https://dice-media.imgix.net/attachments/2020-04-15/7c480368-77f5-4fc9-bac6…r=300&q=30&dpr=2&lossless=true&auto=format&crop=faces&fit=crop&h=250&w=250",
                }}
              ></div> */}
            </a>
            <p>
              The best way to get in touch is to email{" "}
              <a
                className="no-underline white"
                href="mailto:info@interfacelovers.com"
                target="_blank"
              >
                info@interfacelovers.com
              </a>
              . You can also follow us on Twitter{" "}
              <a
                className="no-underline white"
                href="https://twitter.com/theloversmag"
                target="_blank"
              >
                @theloversmag
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
