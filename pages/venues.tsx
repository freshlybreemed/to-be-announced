import * as React from 'react';
import { NextPage } from 'next';
import { Venues } from '../src/components/Venues/Venues';
import { Layout } from '../src/components/Layout/';

const Page: NextPage = () => (
  <Layout noPadding={true}>
    <Venues />
  </Layout>
);

export default Page;
