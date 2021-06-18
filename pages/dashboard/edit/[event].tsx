import * as React from 'react';
import { NextPage } from 'next';
import { Layout } from '../../../src/components/Layout';
import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import { Create } from '../../../src/components/Dashboard';
import { EventProps } from '../../../src/@types/types';
import SecuredPage from '../../../src/hoc/securedPage';

interface Props {
  event: EventProps;
}

const Page: NextPage<Props> = ({ event }) => (
  <Layout noPadding={true}>
    <script
      src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`}
    />

    <Create event={event} />
  </Layout>
);

Page.getInitialProps = async (ctx) => {
  const { origin } = absoluteUrl(ctx.req);
  const { event } = ctx.query;
  const response = await axios.get(`${origin}/api/slug/${event}`);
  const result = response.data;
  console.log(result);
  return {
    event: result[0],
  };
};

export default SecuredPage(Page);
