import * as React from 'react';

export const Footer: React.FunctionComponent = () => (
  <footer className="f3-l f4-m f6 relative overflow-hidden pt5 pb2 ph2 mt2">
    <span className="fl pt2">© TBA 2020, all rights reserved</span>
    <ul className=" fr db pb2 ma0 pt2">
      <li className="fl tr mr2 list">
        <a className="fl dib dim no-underline white " href="/terms">
          Terms
        </a>
      </li>
      <li className="fl tr list">
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
