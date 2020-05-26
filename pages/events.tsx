import * as React from 'react';
import { NextPage } from 'next';
import { Events } from '../src/components/Event/Events';
import { Layout } from '../src/components/Layout/Layout';
import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import { EventProps } from '../src/@types/types';

interface EventsProps {
  events: EventProps[];
}
const Page: NextPage<EventsProps> = ({ events }) => (
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

export default Page;
