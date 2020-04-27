import * as React from "react";

export const Home: React.FunctionComponent = () => (
  <div className={"pv4 relative "}>
    <div className="mw8 ml4-ns ">
      {/* <div
        className="relative db overflow-hidden"
        style={{ zIndex: 10, top: 0, left: 0 }}
      >
        <video autoPlay loop className="sc-1fs7h0j-7 w-60">
          <source
            data-src="https://dice-media.imgix.net/videos/homepagecover.3b7f329175c1ef6acc9454ae7eb83ac0.mp4"
            data-mobsrc="https://dice-media.imgix.net/videos/homepagecover-mobile.b7dd4a81a84fc704231f356251e7b5f0.mp4"
            src="https://dice-media.imgix.net/videos/homepagecover.3b7f329175c1ef6acc9454ae7eb83ac0.mp4"
          />
        </video>
      </div> */}

      <h1 className="f1-ns f2">
        Discover live experiences that match your passions or create your own
        with online ticketing tools
      </h1>
      <div className="mb4">
        <a className="b--white dib noselect  br-100 b--solid bg-black hover-bg-white hover-black pa2 mb2 ph4 f3 fw5 mr3">
          Sign Up
        </a>
        <a className="b--white dib bg-black noselect hover-bg-white hover-black  br-100 b--solid pa2 mb2 ph4 f3 fw5">
          Submit An Event
        </a>
      </div>
    </div>
    <div className="mw8 ml4-ns pt4 mt2 pb1 f2-ns f3 fw5 ">
      Upcoming Events in <span className="gray">Los Angeles</span>{' '}
      <span className="mt3 dim">
        <svg
          className="white "
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
        </svg>
      </span>
    </div>
    {/* <ul className="overflow-hidden list v-base items-center justify-between flex">
      <li className="mr3 mw-100 mw-48-l">
        <a className="transition" href="/">
          <img
            className="db mw-100 "
            src="https://s1.ticketm.net/dam/a/5d5/bcaf1027-1df0-4ea8-8366-6876e84b15d5_1315141_RETINA_PORTRAIT_16_9.jpg"
            alt=""
          />
        </a>
        <h3 className="fw5 f3 mb0">Tierra Whack</h3>
        <h4 className="fw5 gray f4 mt1">The Wiltern, LA</h4>
      </li>
      <li className="mr3 mw-100 mw-48-l">
        <a className="transition" href="/">
          <img
            className="db mw-100 "
            src="https://s1.ticketm.net/dam/a/12d/520e1ff8-9df2-4847-bca7-668e25d5e12d_1286191_RETINA_PORTRAIT_16_9.jpg"
            alt=""
          />
        </a>
        <h3 className="fw5 f3 mb0">Azizi Gibson</h3>
        <h4 className="fw5 gray f4 mt1">Bootsie Bellows, LA</h4>
      </li>

      <li className=" mw-100 mw-48-l">
        <a className="transition" href="/">
          <img
            className="db mw-100 "
            src="https://s1.ticketm.net/dam/a/040/997d0de0-af52-4455-bc48-813f05a4f040_1205621_RETINA_PORTRAIT_16_9.jpg"
            alt=""
          />
        </a>
        <h3 className="fw5 f3 mb0">Trippe Redd</h3>
        <h4 className="fw5 gray f4 mt1">The Noho, LA</h4>
      </li>
    </ul> */}

    <div className="db w-100 pt2 ">
      <ul className="overflow-hidden list v-base ml4-ns pl0-ns ph3">
        <li className="fl mw-100 mw-48-l">
          <a className="transition" href="/">
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
          <a className="transition" href="/">
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
          <a className="transition" href="/">
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
          <a className="transition" href="/">
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
