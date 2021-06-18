import * as React from 'react';
import { NextPage } from 'next';
import { MyEvents } from '../../src/components/Dashboard/';
import { Layout } from '../../src/components/Layout/';
import { EventProps } from '../../src/@types/types';
import useRequest from '../../src/lib/useRequest';
import SecuredPage from '../../src/hoc/securedPage';


const Page: NextPage = () => {
  const { data }  = useRequest<EventProps[]>({ url: `/api/event` })
  return(
  <Layout>
    <div>
      <div className="mw8-ns w-100 center pv4 ph3-ns" id="dashboard">
      {data ? (
        <MyEvents events={data} />   ) : (
          <div className="vh-50 dt center">
            <div className="v-mid dtc">
              <i className="fa-6x fa fa-spinner fa-spin mr2" />
            </div>
          </div>
        )}
      </div>
    </div>
  </Layout>
)
  }


export default SecuredPage(Page);
