import * as React from 'react';
import { NextPage } from 'next';
import { Forgot } from '../src/components/Forgot';
import { Layout } from '../src/components/Layout/';

const Page: NextPage = () => (
  <Layout>
    <Forgot />
  </Layout>
);

export default Page;

