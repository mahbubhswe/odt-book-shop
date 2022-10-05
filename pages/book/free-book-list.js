import React from "react";
import FreeBookScreen from "../../components/FreeBookScreen";
import Layout from "../../layout/Layout";
import { freeBookList } from "../../utils/freeBookList.js";
export default function Index() {
  return (
    <Layout pageTitle="Free book list">
      <FreeBookScreen freeBookList={freeBookList} />
    </Layout>
  );
}
