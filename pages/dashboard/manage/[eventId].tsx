import * as React from 'react';
import { NextPage } from 'next';
import { ManageEvent } from '../../../src/components/Dashboard';
import { Layout } from '../../../src/components/Layout';
import NoSSR from 'react-no-ssr';
// import axios from'axios';
import { EventProps } from '../../../src/@types/types';
import useRequest from '../../../src/lib/useRequest';

const Page: NextPage = () => {
  const eventId =
    typeof window !== 'undefined'
      ? window.location.pathname.split('/').slice(-1)[0]
      : '';
  console.log(eventId);
  const { data } = useRequest<EventProps[]>({ url: `/api/_id/${eventId}` });
  return (
    <Layout>
      <NoSSR>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`}
        />
      </NoSSR>

      <div className="mw9 center pv2 ph3-ns overflow-hidden" id="dashboard">
        <section className="flex-m flex-l nl3-m nr3-m nl3-l nr3-l">
          {data ? (
            <ManageEvent event={data[0]} />
          ) : (
            <div className="vh-50 dt center">
              <div className="v-mid dtc">
                <i className="fa-6x fa fa-spinner fa-spin mr2" />
              </div>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};
// export const getStaticPaths: GetStaticPaths = async () => {
//   // Get the paths we want to pre-render based on users
//   const response = await axios.get(`https://whatstba.com/api/event`);
//   const paths = response.data.map((event) => {
//     return { params: { event: event.slug } };
//   });

//   console.log(paths);

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: true };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   try {
//     console.log('try', params);
//     const event = (
//       await axios.get(`https://whatstba.com/api/slug/${params.event}`)
//     ).data[0];
//     return { props: { event } };
//   } catch (err) {
//     console.log('err', err);
//     return { props: { errors: '' } };
//   }
// };

export default Page;
