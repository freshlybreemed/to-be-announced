import * as React from 'react';
import { NextPage } from 'next';
import { Create } from '../../src/components/Dashboard';
import { Layout } from '../../src/components/Layout';

const Page: NextPage = () => (
  <Layout>
    <script
      src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`}
    />

    <div className="mw8 center pv4 ph3" id="dashboard">
      <Create />
    </div>
  </Layout>
);

export default Page;
