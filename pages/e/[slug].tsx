import * as React from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import { Event } from '../../src/components/Event';
import { Layout } from '../../src/components/Layout';
import { EventProps } from '../../src/@types/types';

interface EventSearchProps {
  event: EventProps;
}

const Page: NextPage<EventSearchProps> = ({ event }) => (
  <Layout>
    <Event event={event} />
  </Layout>
);

Page.getInitialProps = async (ctx) => {
  const { origin } = absoluteUrl(ctx.req);
  const { slug } = ctx.query;
  const response = await axios.get(`${origin}/api/event/${slug}`);
  const event = response.data[0];
  return { event };
};

export default Page;
