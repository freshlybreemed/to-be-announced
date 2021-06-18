import * as React from 'react';
import { NextPage } from 'next';
import { Payouts } from '../../src/components/Dashboard/';
import { Layout } from '../../src/components/Layout/';
import SecuredPage from '../../src/hoc/securedPage';

// import axios from 'axios';
// import absoluteUrl from 'next-absolute-url';
// import { EventProps } from '../../src/@types/types';

const Page: NextPage = () => (
  <Layout>
    <div>
      <div className="mw8 center pv4 ph3" id="dashboard">
        <section className="flex-m flex-l nl3-m nr3-m nl3-l nr3-l">
          <Payouts />
        </section>
      </div>
    </div>
  </Layout>
);

// Page.getInitialProps = async (ctx) => {
//   const { origin } = absoluteUrl(ctx.req);
//   const response = await axios.get(`${origin}/api/myevents`);
//   const result = response.data;
//   return {
//     events: result,
//   };
// };

export default SecuredPage(Page);
