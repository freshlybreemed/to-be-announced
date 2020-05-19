import * as React from 'react';
import { getCookieFromBrowser, removeCookie } from '../lib';
import Router from 'next/router';
export const Nav: React.FunctionComponent = () => {
  const isLoggedIn = getCookieFromBrowser('id_token') ? true : false;
  const handleLogout = () => {
    removeCookie('id_token');
    Router.push('/');
  };
  return (
    <main className="overflow-hidden relative mb5-ns mb3">
      <a className="fl fr-ns no-underline gray f3 fw6" href="/">
        <span className="sc-683qsc-1 gyQBaO">TBA</span>
      </a>
      <ul className=" fr f3 db pa0 ma0 ">
        <li className="fl tr mr3 list">
          <a className="fl dib dim no-underline white " href="/events">
            Events
          </a>
        </li>
        <li className="fl tr mr3 list">
          <a className="fl dib dim no-underline white " href="/dashboard">
            Dashboard
          </a>
        </li>
        {isLoggedIn ? (
          <li className="fl tr mr3 list ">
            <a
              onClick={handleLogout}
              className="fl dib dim no-underline white "
            >
              Logout
            </a>
          </li>
        ) : (
          <li className="fl tr mr3 list ">
            <a className="fl dib dim no-underline white " href="/login">
              Login
            </a>
          </li>
        )}
      </ul>
    </main>
  );
};
