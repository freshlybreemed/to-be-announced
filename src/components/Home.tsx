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
      Upcoming Events in <span className="gray">Los Angeles</span>
    </div>
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
    <div className="db w-100 pt2">
      <article className="cf pa3 mw9 center overflow-hidden">
        <header className="fl w-100 w-50-l pa3-m pa4-l mb1 mb2-l">
          <h1 className="lh-title f1 b mt0">
            One platform. One process. All your events.
          </h1>
          <h2 className="f4 gray">
            Deliver live, virtual, or hybrid events. Your audience is waiting.
          </h2>
        </header>
        <section className="fl w-100">
          <div className="fl w-100 w-50-m w-33-l pa3-m pa4-l">
            <svg
              className="white"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
            >
              <path d="M14.8 21.314c-1.185.44-2.463.686-3.8.686-6.075 0-11-4.924-11-11 0-6.074 4.925-11 11-11 6.074 0 10.999 4.926 10.999 11 0 .463-.032.918-.09 1.365.264.282.421.666.421 1.103v.024l.121-.005c.881 0 1.547.675 1.547 1.57l.002 5.839c0 1.914-1.213 3.104-3.167 3.104h-2.64c-2.07 0-2.76-1.406-3.094-2.084l-.299-.602zm6.033 1.686c1.418 0 2.167-.766 2.167-2.104l-.002-5.839c0-.386-.274-.57-.547-.57-.276 0-.549.185-.549.535v2.56c0 .175-.141.259-.281.259-.145 0-.291-.089-.291-.259v-4.114c0-.396-.288-.589-.577-.589-.293 0-.587.199-.587.589v3.884c0 .164-.131.245-.264.245s-.268-.084-.268-.25v-4.557c0-.391-.285-.59-.613-.59-.322 0-.572.193-.572.59l-.002 4.609c0 .183-.143.275-.285.275-.145 0-.287-.092-.287-.275v-3.872c0-.369-.284-.557-.565-.557-.277 0-.553.182-.553.557v4.794c0 .154-.111.234-.226.234-.084 0-.172-.042-.219-.128l-.785-1.444c-.152-.292-.432-.419-.709-.419-.41 0-.818.277-.818.711 0 .111.027.233.085.362.112.265 1.557 3.112 1.913 3.839.375.762.847 1.524 2.195 1.524h2.64zm.124-11.109c.027-.293.042-.59.042-.891 0-5.514-4.486-10-9.999-10-5.514 0-10 4.486-10 10s4.486 10 10 10c1.176 0 2.301-.209 3.348-.587l-.046-.092c-.718-1.433-1.066-2.127-1.125-2.265-.117-.255-.177-.518-.177-.781 0-.943.816-1.711 1.818-1.711.344 0 .664.089.939.254v-2.291c0-.888.668-1.557 1.553-1.557l.326.032c.258-.49.764-.802 1.385-.802.59 0 1.086.28 1.367.72.117-.027.238-.041.365-.041l.204.012zm-12.519 5.991c-1.989-.746-3.569-2.329-4.308-4.321l-.935.116c.821 2.409 2.721 4.311 5.126 5.139l.117-.934zm.238-1.903c-1.166-.547-2.107-1.49-2.654-2.656l-.954.121c.65 1.578 1.91 2.838 3.49 3.489l.118-.954zm2.324-8.645c2.025 0 3.667 1.641 3.667 3.666s-1.642 3.667-3.667 3.667c-2.026 0-3.667-1.642-3.667-3.667s1.641-3.666 3.667-3.666zm0 1c-1.47 0-2.667 1.196-2.667 2.666 0 1.471 1.197 2.667 2.667 2.667 1.471 0 2.667-1.196 2.667-2.667 0-1.47-1.196-2.666-2.667-2.666zm-.916 2.666c0 .506.41.917.916.917s.917-.411.917-.917-.411-.916-.917-.916-.916.41-.916.916zm6.849-2.443c-.65-1.577-1.912-2.838-3.49-3.488l-.119.954c1.166.546 2.107 1.488 2.656 2.654l.953-.12zm.924-.115c-.746-1.977-2.319-3.547-4.301-4.287l.119-.934c2.395.822 4.289 2.712 5.117 5.104l-.935.117z" />
            </svg>
            <h2>Live Events</h2>
            <p className="f4 lh-copy measure">
              Connect in-person to drive IRL conversations, content experiences,
              and interactions.
            </p>
          </div>
          <div className="fl w-100 w-50-m w-33-l pa3-m pa4-l">
            <svg
              className="white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z" />
            </svg>
            <h2>Virtual Events</h2>
            <p className="f4 lh-copy measure">
              Engage your community online with webinars, livestreams, meetings,
              and more.
            </p>
          </div>
          <div className="fl w-100 w-50-m w-33-l pa3-m pa4-l">
            <svg
              className="white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z" />
            </svg>
            <h2>Hybrid Events</h2>
            <p className="f4 lh-copy measure">
              Blend live and virtual events to extend your reach and get more
              out of your investment.
            </p>
          </div>
        </section>
      </article>
    </div>
  </div>
);
