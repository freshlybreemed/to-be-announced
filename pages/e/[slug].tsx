import * as React from "react";
import { NextPage } from "next";
import axios from "axios";
import { Event } from "../../src/components/Event";
import PropTypes from "prop-types";

import { Layout } from "../../src/components/Layout";
import absoluteUrl from "next-absolute-url";

const Page: NextPage = (props) => (
  <Layout>
    <Event event={props.event} />
  </Layout>
);

Page.getInitialProps = async (ctx) => {
  // const subreddit = "typescript";
  const { origin } = absoluteUrl(ctx.req);
  const { slug } = ctx.query;
  const response = await axios.get(`${origin}/api/event/${slug}`);
  const result = response.data[0];
  // console.log(result.title);
  return {
    event: result,
  };
};
Page.propTypes = {
  event: PropTypes.object,
};
export default Page;
