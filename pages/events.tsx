import * as React from 'react';
import { NextPage } from 'next';
import { Events } from '../src/components/Events';
import { Layout } from '../src/components/Layout';

const Page: NextPage = () => (
  <Layout>
    <Events />
  </Layout>
);

export default Page;
