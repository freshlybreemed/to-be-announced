import * as React from "react";
import Link from "next/link";

export const Nav: React.FunctionComponent = () => (
  <div className="overflow-hidden  mb5">
    <a className="fl fr-ns no-underline gray f3 fw6" href="https://thms.works/">
      TBA{" "}
    </a>
    <ul className=" fr f3 db pa0 ma0 ">
      <li className="fl tr mr2 list">
        <a
          className="fl dib no-underline white "
          target="_blank"
          href="https://instagram.com/vimarethomas"
        >
          Events
        </a>
      </li>
      <li className="fl tr mr2 list">
        <a
          className="fl dib no-underline white "
          target="_blank"
          href="https://twitter.com/vimarethomas"
        >
          About
        </a>
      </li>
      <li className="fl tr mr2 list ">
        <a
          className="fl dib no-underline white "
          target="_blank"
          href="https://www.linkedin.com/in/vimarethomas/"
        >
          Home
        </a>
      </li>
    </ul>
  </div>
);
