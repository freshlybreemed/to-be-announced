import PropTypes from 'prop-types';
import * as React from 'react';
import { NextPage } from 'next';
import { Events } from '../src/components/Events';
import { Layout } from '../src/components/Layout';
import axios from 'axios';
import absoluteUrl from 'next-absolute-url';

const Page: NextPage = (events) => (
  <Layout>
    <Events events={events} />
  </Layout>
);

Page.getInitialProps = async (ctx) => {
  const { origin } = absoluteUrl(ctx.req);
  const response = await axios.get(`${origin}/api/event`);
  const result = response.data;
  console.log(result);
  return {
    events: result,
  };
};
Page.propTypes = {
  events: PropTypes.object,
};
export default Page;
