import * as React from 'react';
import { NextPage } from 'next';
import { About } from '../src/components/About';
import { Layout } from '../src/components/Layout/';

const Page: NextPage = () => (
  <Layout>
    <About />
  </Layout>
);

export default Page;
