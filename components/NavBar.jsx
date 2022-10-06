import { Drawer, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/navBar.module.css";
import { useState } from "react";
import SideBar from "../components/SideBar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
export default function NavBar() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Stack direction="row" sx={{ mt: "25px" }}>
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            display: { xs: "block", sm: "block", md: "none", lg: "none" },
            ml: "20px",
          }}
        >
          <ChevronRightIcon />
        </IconButton>
        <Typography
          sx={{
            display: { xs: "block", sm: "block", md: "none", lg: "none" },
            ml: "20px",
          }}
        >
          <Link href="/" passHref>
            <a className={styles.logoText}>odt.</a>
          </Link>
        </Typography>
        <Typography flexGrow={0.9}></Typography>
        <Stack
          direction="row"
          spacing={5}
          sx={{
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
          }}
        >
          <Link href="/" passHref>
            <a className={styles.logoText}>odt.</a>
          </Link>
          <Link href="/" passHref>
            <a className={styles.navItem}>티켓팅</a>
          </Link>
          <Link href="/" passHref>
            <a className={styles.navItem}>도서관</a>
          </Link>
          <Link href="/" passHref>
            <a className={styles.navItem}>마이페이지</a>
          </Link>
          <Link href="/" passHref>
            <a className={styles.authBtn}>Login/Sign up</a>
          </Link>
        </Stack>
        <IconButton
          onClick={() => setShow(true)}
          sx={{
            display: { xs: "block", sm: "block", md: "none", lg: "none" },
            ml: "20px",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Stack>
      {/* mobile menu for navbar*/}
      <Drawer open={show} onClose={() => setShow(false)}>
        <Stack sx={{ padding: "20px", width: "100vw" }} spacing={1}>
          <div style={{ display: "flex", justifyContent: "right" }}>
            <IconButton onClick={() => setShow(false)} type="button">
              <CloseIcon></CloseIcon>
            </IconButton>
          </div>
          <Stack spacing={2}>
            <Link href="/" passHref>
              <a className={styles.navItem}>티켓팅</a>
            </Link>
            <Link href="/" passHref>
              <a className={styles.navItem}>도서관</a>
            </Link>
            <Link href="/" passHref>
              <a className={styles.navItem}>마이페이지</a>
            </Link>
            <Link href="/" passHref>
              <a className={styles.authBtn}>Login/Sign up</a>
            </Link>
          </Stack>
        </Stack>
      </Drawer>
      {/* mobile menu for sidebar*/}
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Stack sx={{  padding: "20px", width: "100vw" }}>
          <div style={{ display: "flex", justifyContent: "right" }}>
            <IconButton
              size="small"
              onClick={() => setOpen(false)}
              type="button"
            >
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <SideBar />
        </Stack>
      </Drawer>
    </React.Fragment>
  );
}
