import { Container } from "@mui/material";
import Head from "next/head";
import React from "react";
export default function DashboardLayout({ children, pageTitle }) {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle ? pageTitle + " | Book shop" : "Book shop"}</title>
      </Head>
      <main>
        <Container>{children}</Container>
      </main>
    </React.Fragment>
  );
}
