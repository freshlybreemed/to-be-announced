import * as React from "react";
import { NextPage } from "next";
import { Home } from "../src/components/Home";
import { Layout } from "../src/components/Layout";

const Page: NextPage = (props) => (
  <Layout>
    <Home />
  </Layout>
);

export default Page;
