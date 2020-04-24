import * as React from "react";
import * as css from "../src/components/Home.css";
import { Layout } from "../src/components/Layout";

export default () => (
  <Layout>
    <div className={css.home}>
      home
      <div>nested</div>
    </div>
  </Layout>
);
