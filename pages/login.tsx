import * as React from "react";
import { NextPage } from "next";
import { Login } from "../src/components/Login";
import { Layout } from "../src/components/Layout";

const Page: NextPage = () => (
  <Layout>
    <Login />
  </Layout>
);

export default Page;
