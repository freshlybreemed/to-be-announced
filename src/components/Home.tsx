import * as React from "react";

export const Home: React.FunctionComponent = () => (
  <div className={"pv4"}>
    <div className="mw8 ml4-ns">
      <h1 className="f1-ns f2">
        Discover live experiences that match your passions or create your own
        with online ticketing tools.
      </h1>
      <div className="mb4">
        <a className="b--white dib noselect dim br-100 b--solid pa2 mb2 ph4 f3 fw5 mr3">
          Sign Up
        </a>
        <a className="b--white dib noselect dim br-100 b--solid pa2 mb2 ph4 f3 fw5">
          Submit An Event
        </a>
      </div>
    </div>
    <div className="db w-100 pt4 ">
      <ul className="overflow-hidden list v-base ">
        <li className="fl mw-100 mw-48-l">
          <a className="transition" href="https://thms.works/work/foreignrap">
            <img
              className="db mw-100 "
              src="https://s1.ticketm.net/dam/a/5d5/bcaf1027-1df0-4ea8-8366-6876e84b15d5_1315141_RETINA_PORTRAIT_16_9.jpg"
              alt=""
            />
          </a>
          <h3 className="fw5 f3 mb0">Tierra Whack</h3>
          <h4 className="fw5 gray f4 mt1">The Wiltern, LA</h4>
        </li>
        <li className="fl-ns fr mw-100 mw-48-l">
          <a className="transition" href="https://thms.works/work/foreignrap">
            <img
              className="db mw-100 "
              src="https://s1.ticketm.net/dam/a/12d/520e1ff8-9df2-4847-bca7-668e25d5e12d_1286191_RETINA_PORTRAIT_16_9.jpg"
              alt=""
            />
          </a>
          <h3 className="fw5 f3 mb0">Azizi Gibson</h3>
          <h4 className="fw5 gray f4 mt1">Bootsie Bellows, LA</h4>
        </li>

        <li className="fl  mw-100 mw-48-l">
          <a className="transition" href="https://thms.works/work/foreignrap">
            <img
              className="db mw-100 "
              src="https://s1.ticketm.net/dam/a/040/997d0de0-af52-4455-bc48-813f05a4f040_1205621_RETINA_PORTRAIT_16_9.jpg"
              alt=""
            />
          </a>
          <h3 className="fw5 f3 mb0">Trippe Redd</h3>
          <h4 className="fw5 gray f4 mt1">The Noho, LA</h4>
        </li>

        <li className="fl-ns fr  mw-100 mw-48-l">
          <a className="transition" href="https://thms.works/work/foreignrap">
            <img
              className="db mw-100 "
              src="https://s1.ticketm.net/dam/a/71a/b0f1cc0a-b754-4fc4-8084-0049a899771a_979481_RETINA_PORTRAIT_16_9.jpg"
              alt=""
            />
          </a>
          <h3 className="fw5 f3 mb0">Fetty Wap</h3>
          <h4 className="fw5 gray f4 mt1">The Observatory, Orange County</h4>
        </li>
      </ul>
    </div>
  </div>
);
