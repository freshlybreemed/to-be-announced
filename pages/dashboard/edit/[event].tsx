import * as React from 'react';
import { NextPage } from 'next';
import { Layout } from '../../../src/components/Layout/Layout';
import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import { Create } from '../../../src/components/Dashboard/Create/Create';
import { EventProps } from '../../../src/@types/types';

interface Props {
  event: EventProps;
}

const Page: NextPage<Props> = ({ event }) => (
  <Layout>
    <script
      src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`}
    />

    <div className="mw9 center pv2 ph3-ns overflow-hidden" id="dashboard">
      <section className="flex-m flex-l nl3-m nr3-m nl3-l nr3-l">
        <Create event={event} />
      </section>
    </div>
  </Layout>
);

Page.getInitialProps = async (ctx) => {
  const { origin } = absoluteUrl(ctx.req);
  const { event } = ctx.query;
  const response = await axios.get(`${origin}/api/event/${event}`);
  const result = response.data;
  console.log(result);
  return {
    event: result[0],
  };
};

export default Page;
