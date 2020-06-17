import * as React from 'react';
import { NextPage } from 'next';
import { VenueLookup } from '../../src/components/Venues/VenueLookup';
import { Layout } from '../../src/components/Layout';

const Page: NextPage = () => (
  <Layout noPadding={true}>
    <VenueLookup />
  </Layout>
);

export default Page;
