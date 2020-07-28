import * as React from 'react';
import { NextPage } from 'next';
import { ScanTicket } from '../../../../src/components/Dashboard';
import { Layout } from '../../../../src/components/Layout';
import absoluteUrl from 'next-absolute-url';
import axios from 'axios';
import { EventProps, OrderProps } from '../../../../src/@types/types';

interface Props {
  event: EventProps;
  orders: OrderProps[];
}

const data = {
  title: `Create Event`,
  header: 'Social Ticketing',
  description: 'Discover lit events.',
};

const Page: NextPage<Props> = ({ event, orders }) => (
  <Layout data={data} noPadding={true}>
    {typeof window !== 'undefined' && (
      <ScanTicket orders={orders} event={event} />
    )}
  </Layout>
);

Page.getInitialProps = async (ctx) => {
  const { origin } = absoluteUrl(ctx.req);
  const { eventId } = ctx.query;
  const eventResponse = await axios.get(`${origin}/api/_id/${eventId}`);
  const ticketsResponse = await axios.get(`${origin}/api/tickets/${eventId}`);
  const eventResult = eventResponse.data;
  const ticketResult = ticketsResponse.data;
  return {
    event: eventResult[0],
    orders: ticketResult,
  };
};

export default Page;
