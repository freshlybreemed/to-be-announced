import * as React from 'react';
import { NextPage } from 'next';
import { ManageEvent } from '../../../src/components/Dashboard/ManageEvent';
import { SideBar } from '../../../src/components/Dashboard/SideBar';
import { Layout } from '../../../src/components/Layout';

interface Props {
  event: any;
}
const Page: NextPage<Props> = ({ event }) => (
  <Layout>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWqhUxBtnG59S2Lx47umesuG-NnLpMGSA&libraries=places" />

    <div className="mw8 center pv4 ph3 overflow-hidden" id="dashboard">
      <section className="flex-m flex-l nl3-m nr3-m nl3-l nr3-l">
        <SideBar />
        <ManageEvent event={event} />
      </section>
    </div>
  </Layout>
);

Page.getInitialProps = () => {
  return {
    event: {
      image:
        'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F91347047%2F6195246267%2F1%2Foriginal.20191005-003716?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=200%2C0%2C1600%2C800&s=35b1c012c592a60e6731375383f7a75a',
      title: 'Trap Karaoke',
      totalSales: '1085',
      status: 'Sale Ended',
      tixsSold: 869,
      tixsTotal: 1023,
    },
  };
};

export default Page;
