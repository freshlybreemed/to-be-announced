import * as React from 'react';
import { NextPage } from 'next';
import { ManageOrder } from '../../../../../src/components/Dashboard';
import { Layout } from '../../../../../src/components/Layout';
import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import { EventProps, OrderProps } from '../../../../../src/@types/types';

interface Props {
  event: EventProps;
  order: OrderProps;
}

const Page: NextPage<Props> = ({ event, order }) => (
  <Layout>
    <div className="mw9 center pv2 ph3-ns overflow-hidden" id="dashboard">
      <section className="flex-m flex-l nl3-m nr3-m nl3-l nr3-l">
        <ManageOrder order={order} event={event} />
      </section>
    </div>
  </Layout>
);

Page.getInitialProps = async (ctx) => {
  const { origin } = absoluteUrl(ctx.req);
  const { eventId, attendee } = ctx.query;
  const eventResponse = await axios.get(`${origin}/api/_id/${eventId}`);
  const orderResponse = await axios.get(`${origin}/api/tickets/${eventId}`);
  const eventResult = eventResponse.data;
  const ordertResult = orderResponse.data.filter(
    (curr) => curr._id === attendee,
  );
  return {
    event: eventResult[0],
    order: ordertResult[0],
  };
};

export default Page;
