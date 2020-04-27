import * as React from "react";
import { NextPage } from "next";
import { MyEvents } from "../../src/components/Dashboard/MyEvents";
import { SideBar } from "../../src/components/Dashboard/SideBar";
import { Layout } from "../../src/components/Layout";

const Page: NextPage = () => (
  <Layout>
    <div>
      <div className="mw8 center pv4 ph3" id="dashboard">
        <section className="flex-m flex-l nl3-m nr3-m nl3-l nr3-l">
          <SideBar />
          <MyEvents />
        </section>
      </div>
    </div>
  </Layout>
);

export default Page;
