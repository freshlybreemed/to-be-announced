import * as React from 'react';

export const Footer: React.FunctionComponent = () => (
  <footer className="f3-l f4-m f6 relative overflow-hidden pt1 pb2 mt2">
    <div className="pb3 w-50-ns w-100">
      <a href="" className="white no-underline fw6 f4 b db pv1 mv1 ">
        About
      </a>
      <a href="" className="white no-underline fw6 f4 b db pv1 mv1">
        Events
      </a>
      <a href="" className="white no-underline fw6 f4 b db pv1 mv1">
        Work With Us
      </a>
      <a href="" className="white no-underline fw6 f4 b db pv1 mv1">
        Help
      </a>
    </div>{' '}
    <form className="justify-center flex-nowrap items-center ">
      <label className=" dib">
        <input
          style={{ lineHeight: '32px' }}
          className="overflow-visible bn ph2 pv1 f5 fw6 black"
          placeholder="Email"
        />
      </label>
      <button
        type="submit"
        className="bn bg-transparent white pl3 ml1 fw6 dim f4"
      >
        Subscribe
      </button>
    </form>
    {/* <ul className=" fr db pb2 ma0 pt2">
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
  */}
  </footer>
);
