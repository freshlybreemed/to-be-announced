import * as React from 'react';
import { NextPage } from 'next';
import { MyEvents } from '../../src/components/Dashboard/ManageEvent/MyEvents';
import { Layout } from '../../src/components/Layout/Layout';
import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import PropTypes from 'prop-types';

interface Props {
  events: any;
}
const Page: NextPage<Props> = ({ events }) => (
  <Layout>
    <div>
      <div className="mw8 center pv4 ph3" id="dashboard">
        <section className="flex-m flex-l nl3-m nr3-m nl3-l nr3-l">
          <MyEvents events={events} />
        </section>
      </div>
    </div>
  </Layout>
);

Page.getInitialProps = async (ctx) => {
  const { origin } = absoluteUrl(ctx.req);
  const response = await axios.get(`${origin}/api/event`);
  const result = response.data;
  return {
    events: result,
  };
};
Page.propTypes = {
  events: PropTypes.object,
};
export default Page;
