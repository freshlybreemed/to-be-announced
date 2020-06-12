import * as React from 'react';

export const Footer: React.FunctionComponent = () => (
  <footer className="relative overflow-hidden pb0 mt2">
    <span className="fl pt2">© TBA 2020, all rights reserved</span>
    <ul className=" fr db pa0 ma0 pt2">
      <li className="fl tr mr2 list">
        <a className="fl dib dim no-underline white " href="/terms">
          Terms
        </a>
      </li>
      <li className="fl tr mr2 list">
        <a
          className="fl dim dib no-underline white "
          target="_blank"
          href="https://twitter.com/vimarethomas"
        >
          Privacy Policy
        </a>
      </li>
    </ul>
  </footer>
);
