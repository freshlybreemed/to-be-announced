import * as React from 'react';
import { NextPage } from 'next';
import { ManageOrder } from '../../../../../src/components/Dashboard/';
import { Layout } from '../../../../../src/components/Layout/';
import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import { EventProps } from '../../../../../src/@types/types';

interface Props {
  event: EventProps;
  ticket: any;
}

const Page: NextPage<Props> = ({ event, ticket }) => (
  <Layout>
    <div className="mw9 center pv2 ph3-ns overflow-hidden" id="dashboard">
      <section className="flex-m flex-l nl3-m nr3-m nl3-l nr3-l">
        <ManageOrder ticket={ticket} event={event} />
      </section>
    </div>
  </Layout>
);

Page.getInitialProps = async (ctx) => {
  const { origin } = absoluteUrl(ctx.req);
  const { event,attendee } = ctx.query;
  const eventResponse = await axios.get(`${origin}/api/event/${event}`);
  const ticketsResponse = await axios.get(`${origin}/api/tickets/${event}`);
  const eventResult = eventResponse.data;
  const ticketResult = ticketsResponse.data.filter(curr=> curr._id === attendee);
  return {
    event: eventResult[0],
    ticket: ticketResult[0],
  };
};

export default Page;
