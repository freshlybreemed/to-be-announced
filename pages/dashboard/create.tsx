import * as React from "react";
import { NextPage } from "next";
import { Create } from "../../src/components/Dashboard/Create/Create";
import { SideBar } from "../../src/components/Dashboard/SideBar";
import { Layout } from "../../src/components/Layout";

const Page: NextPage = () => (
  <Layout>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWqhUxBtnG59S2Lx47umesuG-NnLpMGSA&libraries=places" />

    <div className="mw8 center pv4 ph3" id="dashboard">
      <section className="flex-m flex-l nl3-m nr3-m nl3-l nr3-l">
        <SideBar />
        <Create />
      </section>
    </div>
  </Layout>
);

export default Page;
