import React from "react";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import styles from "../styles/sideBar.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Link from "next/link";
export default function SideBarScreen() {
  return (
    <React.Fragment>
      <Box sx={{ p: "30px" }}>
        <Typography className={styles.sideBarItemTitle}>
          참여중인 모임
        </Typography>
        <Stack spacing={2}>
          <Typography className={styles.sideBarItem} component="div">
            <Link href="/">
              <a>2001:Odyssey</a>
            </Link>
            <Button
              type="button"
              size="small"
              className={styles.sideBarItemFirstBtn}
            >
              New
            </Button>
          </Typography>
          <Typography className={styles.sideBarItem} component="div">
            <Link href="/">
              <a className={styles.sideBarBoldText}>글과 파도</a>
            </Link>
            <Button
              type="button"
              size="small"
              className={styles.sideBarItemBtn}
            >
              02/21
            </Button>
          </Typography>
          <Typography className={styles.sideBarItem} component="div">
            <Link href="/">
              <a className={styles.sideBarBoldText}>신림드로잉 클럽</a>
            </Link>
            <Button
              type="button"
              size="small"
              className={styles.sideBarItemBtn}
            >
              D-7
            </Button>
          </Typography>
        </Stack>
        <Stack spacing={2} mt={5}>
          <Link href="/">
            <a className={styles.sideBarItem}>티켓팅</a>
          </Link>

          <Typography className={styles.sideBarItem} component="div">
            <Link href="/">
              <a className={styles.sideBarBoldText}>도서관</a>
            </Link>
            <IconButton>
              <ArrowForwardIosIcon
                sx={{ width: "20px", height: "15px", color: "#000000" }}
              />
            </IconButton>
          </Typography>
        </Stack>
        <Stack spacing={2} mt={5} ml={2}>
          <Link href="/">
            <a className={styles.sideBarItem}>독서</a>
          </Link>
          <Link href="/">
            <a className={styles.sideBarItem}>드로잉</a>
          </Link>
        </Stack>
      </Box>
      <List className={styles.userAccount} sx={{ ml: "10px" }}>
        <ListItem>
          <ListItemIcon>
            <AccountCircleRoundedIcon
              className={styles.sideBarUserIcon}
            ></AccountCircleRoundedIcon>
          </ListItemIcon>
          <ListItemText primary="김윤석" secondary="@asd123"></ListItemText>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
