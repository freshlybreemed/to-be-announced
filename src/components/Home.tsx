import * as React from "react";

export const Home: React.FunctionComponent = () => (
  <div className={"pv4"}>
    <h1>
      I'm a freelance <span className="gothic">art director</span> and{" "}
      <span className="gothic">product designer</span> building digital
      experiences.
    </h1>
    <div className="db w-100  ">
      <div className=" mw7 ma6 about contain center flex-l">
        <div className="w-40-l dib">
          <h1 className="mb3">About</h1>
        </div>
        <div className="w-60-l dib kirbytext">
          <p>
            Interface Lovers is an online magazine for creative professionals.
            We put the spotlight on designers who are creating the future and
            touching the lives of many. We ask them essential questions to gain
            insights that can push and inspire the rest of us. Interface Lovers
            is a peek into what turns the best designers on about pixels and
            usability.
          </p>
          <p>
            Interface Lovers is brought to you by{" "}
            <a href="http://usepanda.com" target="_blank">
              Panda
            </a>
            .
          </p>
          <h2>Team</h2>
          <p>
            William Channer,{" "}
            <a href="https://twitter.com/williamchanner" target="_blank">
              @williamchanner
            </a>
            <br />
            Founder, Editor
          </p>
          <p>
            Timothy Achumba,{" "}
            <a href="https://twitter.com/timothyachumba" target="_blank">
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
          <h2>Contact</h2>
          <p>
            The best way to get in touch is to email{" "}
            <a href="mailto:info@interfacelovers.com" target="_blank">
              info@interfacelovers.com
            </a>
            . You can also follow us on Twitter{" "}
            <a href="https://twitter.com/theloversmag" target="_blank">
              @theloversmag
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
);
