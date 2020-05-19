import * as React from 'react';
import { NextPage } from 'next';
import { ManageEvent } from '../../../src/components/Dashboard/ManageEvent/Manage';
import { Layout } from '../../../src/components/Layout';
import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import PropTypes from 'prop-types';

interface Props {
  event: any;
}

const Page: NextPage<Props> = ({ event }) => (
  <Layout>
    <script
      src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`}
    />

    <div className="mw8 center pv2 ph3 overflow-hidden" id="dashboard">
      <section className="flex-m flex-l nl3-m nr3-m nl3-l nr3-l">
        <ManageEvent event={event} />
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
Page.propTypes = {
  event: PropTypes.object,
};

export default Page;
