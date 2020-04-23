import * as React from "react";
import Link from "next/link";

export const Nav: React.FunctionComponent = (props) => (
  <nav className=" tc overflow-hidden db mb5">
    <a className="fl fr-ns no-underline gray f3" href="https://thms.works/">
      TBA
    </a>
    {/* <div className="fl">
      <ul className="db fl  pb0">
        <li className="fl mr2 list">
          <a className="dim work no-underline white f3" href="/">
            Events
          </a>
        </li>
        <li className="fl mr2 list">
          <a className="dim  no-underline white f3" href="/profile">
            About
          </a>
        </li>
        <li className="fl mr2 list">
          <a className="dim no-underline white f3" href="/lab">
            Sign-Up
          </a>
        </li>
      </ul>
    </div> */}
  </nav>
);
