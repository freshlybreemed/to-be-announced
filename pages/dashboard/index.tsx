import * as React from 'react';
import { NextPage } from 'next';
import { Dashboard } from '../../src/components/Dashboard/';
import { Layout } from '../../src/components/Layout/';
import SecuredPage from '../../src/hoc/securedPage';

const Page: NextPage = () => (
  <Layout>
    <div>
      <div className="mw8 center pv4 ph3" id="dashboard">
        <section className="flex-m flex-l nl3-m nr3-m nl3-l nr3-l">
          <Dashboard />
        </section>
      </div>
    </div>
  </Layout>
);

export default SecuredPage(Page);
