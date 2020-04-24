import * as React from "react";
import { getCookieFromBrowser, removeCookie } from "../lib";
import Router from "next/router";
export const Nav: React.FunctionComponent = () => {
  const isLoggedIn = getCookieFromBrowser("id_token") ? true : false;
  const handleLogout = () => {
    removeCookie("id_token");
    removeCookie("id_token_a");
    Router.push("/");
  };
  return (
    <div className="overflow-hidden  mb5">
      <a className="fl fr-ns no-underline gray f3 fw6" href="/">
        TBA{" "}
      </a>
      <ul className=" fr f3 db pa0 ma0 ">
        <li className="fl tr mr3 list">
          <a
            className="fl dib dim no-underline white "
            target="_blank"
            href="/events"
          >
            Events
          </a>
        </li>
        <li className="fl tr mr3 list">
          <a
            className="fl dib dim no-underline white "
            target="_blank"
            href="/about"
          >
            About
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
    </div>
  );
};
