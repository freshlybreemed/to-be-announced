import * as React from "react";

export const Footer: React.FunctionComponent = (props) => (
  <div className="overflow-hidden pb0 mt2">
    <span className="fl pt2">Copyright 2020 © TBA</span>
    <ul className=" fr db pa0 ma0 pt2">
      <li className="fl tr mr2 list">
        <a
          className="fl dib no-underline white "
          target="_blank"
          href="https://instagram.com/vimarethomas"
        >
          Instagram
        </a>
      </li>
      <li className="fl tr mr2 list">
        <a
          className="fl dib no-underline white "
          target="_blank"
          href="https://twitter.com/vimarethomas"
        >
          Twitter
        </a>
      </li>
      <li className="fl tr mr2 list ">
        <a
          className="fl dib no-underline white "
          target="_blank"
          href="https://www.linkedin.com/in/vimarethomas/"
        >
          LinkedIn
        </a>
      </li>
      <li className="fl tr mr2 list">
        <a
          className="fl dib no-underline white "
          target="_blank"
          href="https://open.spotify.com/user/thomasvimare?si=YT8ovidxRgyenthFxoMbig"
        >
          Spotify
        </a>
      </li>
      <li className="fl tr mr2 list">
        <a
          className="fl dib no-underline white  "
          target="_blank"
          href="https://medium.com/@vimarethomas"
        >
          Medium
        </a>
      </li>
    </ul>
  </div>
);
