import * as React from 'react';
import { NextPage } from 'next';
import { Event } from '../../src/components/Event';
import { Layout } from '../../src/components/Layout';
import useRequest from '../../src/lib/useRequest';
import { EventProps } from '../../src/@types/types';

interface EventSearchProps {
  slug: string;
}

const Page: NextPage<EventSearchProps> = () => {
  const slug =
    typeof window !== 'undefined'
      ? window.location.pathname.split('/').slice(-1)[0]
      : '';
  const { data } = useRequest({
    url: `/api/slug/${slug}`,
  });
  const event: EventProps = data ? data[0] : null;
  const site = {
    title: event ? `${event.name} Tickets` : 'Social Ticketing',
    header: 'Social Ticketing',
    description: 'Discover lit events.',
  };
  return (
    <Layout data={site}>
      {data ? (
        <Event event={event} />
      ) : (
        <div className="vh-50 dt center">
          <div className="v-mid dtc">
            <i className="fa-6x fa fa-spinner fa-spin mr2" />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Page;
