import * as React from 'react';
import { NextPage } from 'next';
import { ScanTicket } from '../../../src/components/Dashboard';
import { Layout } from '../../../src/components/Layout';

const data = {
  title: `Create Event`,
  header: 'Social Ticketing',
  description: 'Discover lit events.',
};

const Page: NextPage = () => (
  <Layout data={data} noPadding={true}>
    {typeof window !== 'undefined' && <ScanTicket />}
  </Layout>
);

export default Page;
