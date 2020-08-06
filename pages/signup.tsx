import * as React from 'react';
import { NextPage } from 'next';
import { SignUp } from '../src/components/SignUp';
import { Layout } from '../src/components/Layout/';

const Page: NextPage = () => (
  <Layout>
    <SignUp />
  </Layout>
);

export default Page;
