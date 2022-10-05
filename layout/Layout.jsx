import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Head from "next/head";
import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import styles from "../styles/layout.module.css";

export default function Layout({ children, pageTitle }) {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle ? pageTitle + " | Book shop" : "Book shop"}</title>
      </Head>
      <main>
        <Stack direction="row">
          {/* left sidebar */}
          <Box sx={{display:{xs:"none",sm:"none",md:"block",xl:"block"} ,width: "300px", height: "100vh", background: "#FCC307" }}>
            <SideBar />
          </Box>
          {/* rightbar */}
          <Box sx={{ flexGrow: 1 }}>
            {/* navbar */}
            <NavBar />
            <Stack direction="row" sx={{ ml: "30px", my: "25px" }}>
              <Typography className={styles.titleTextLeft}>
                2001:Odyssey
              </Typography>
              <Typography className={styles.titleTextRight}>19</Typography>
            </Stack>
            {/* main content */}
            <Container
              maxWidth="md"
              sx={{ minHeight: "490px", display: "grid", placeContent: "center" }}
            >
              {children}
            </Container>
          </Box>
        </Stack>
      </main>
    </React.Fragment>
  );
}
