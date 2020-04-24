import * as React from "react";

export const Nav: React.FunctionComponent = () => (
  <div className="overflow-hidden  mb5">
    <a className="fl fr-ns no-underline gray f3 fw6" href="/">
      TBA{" "}
    </a>
    <ul className=" fr f3 db pa0 ma0 ">
      <li className="fl tr mr2 list">
        <a
          className="fl dib dim no-underline white "
          target="_blank"
          href="/events"
        >
          Events
        </a>
      </li>
      <li className="fl tr mr2 list">
        <a
          className="fl dib dim no-underline white "
          target="_blank"
          href="/about"
        >
          About
        </a>
      </li>
      <li className="fl tr mr2 list ">
        <a className="fl dib dim no-underline white " target="_blank" href="/">
          Home
        </a>
      </li>
    </ul>
  </div>
);
