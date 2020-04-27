import * as React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import Head from "next/head";

export const Layout: React.FunctionComponent = (props) => (
  <div className="bg-black white pa4 relative">
    {/*language=PostCSS*/}
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <div
      className="db"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        opacity: 0.5,
        background:
          "url(https://abeg.app/static/media/line-background.537a8943.svg) 50% no-repeat",
        backgroundSize: "cover",
      }}
    />
    <Nav />
    <main className="relative">{props.children}</main>
    <Footer />
  </div>
);
