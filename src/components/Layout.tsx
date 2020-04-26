import * as React from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import Head from "next/head";

export const Layout: React.FunctionComponent = (props) => (
  <div className="bg-black white pa4">
    {/*language=PostCSS*/}
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Nav />
    <main className={"pv4 "}>{props.children}</main>
    <Footer />
  </div>
);
