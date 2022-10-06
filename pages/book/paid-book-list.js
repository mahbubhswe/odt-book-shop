import React from "react";
import PaidBookScreen from "../../components/PaidBookScreen";
import Layout from "../../layout/Layout";
import { freeBookList } from "../../utils/freeBookList.js";
import Loading from "../../components/Loading";
export default function Index() {
  if (!freeBookList) {
    return (
      <Layout pageTitle="Loading...">
        <Loading />
      </Layout>
    );
  }
  return (
    <Layout pageTitle="Free book list">
      <PaidBookScreen freeBookList={freeBookList} />
    </Layout>
  );
}
