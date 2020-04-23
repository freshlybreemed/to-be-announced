import * as React from "react";
import { NextPage } from "next";
import axios from "axios";
import { Home } from "../src/components/Home";
import { Layout } from "../src/components/Layout";
import absoluteUrl from "next-absolute-url";

const Page: NextPage = (props) => (
  <Layout>
    <Home />
  </Layout>
);

Page.getInitialProps = async (ctx) => {
  // const subreddit = "typescript";
  const { origin } = absoluteUrl(ctx.req);

  const response = await axios.get(`${origin}/api/event/crankkaraoke`);
  const result = response.data;
  console.log(result);
  return {
    event: result,
  };
};
export default Page;
