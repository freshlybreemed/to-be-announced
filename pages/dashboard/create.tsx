import * as React from 'react';
import { NextPage } from 'next';
import { Create } from '../../src/components/Dashboard';
import { Layout } from '../../src/components/Layout';

const data = {
  title: `Create Event`,
  header: 'Social Ticketing',
  description: 'Discover lit events.',
};

const Page: NextPage = () => (
  <Layout data={data} noPadding={true}>
    <script
      src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`}
    />

    <Create />
  </Layout>
);

export default Page;
