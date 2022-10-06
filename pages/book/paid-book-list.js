import React from "react";
import PaidBookScreen from "../../components/PaidBookScreen";
import Layout from "../../layout/Layout";
import { paidBookList } from "../../utils/paidBookList.js";
import Loading from "../../components/Loading";
export default function Index() {
  if (!paidBookList) {
    return (
      <Layout pageTitle="Loading...">
        <Loading />
      </Layout>
    );
  }
  return (
    <Layout pageTitle="Paid book list">
      <PaidBookScreen paidBookList={paidBookList} />
    </Layout>
  );
}
