import { Stack, Grid, Pagination, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/paidBook.module.css";
export default function FreeBookScreen({ paidBookList }) {
  return (
    <React.Fragment>
      <Typography>
        “ 공상 과학 소설, 영화 그리고 커피를 좋아하는 사람들 ”
      </Typography>
      <Stack direction="row" spacing={1}>
        <Button type="button" size="small" className={styles.itemBtn}>
          서울/경기
        </Button>
        <Button type="button" size="small" className={styles.itemBtn}>
          직장인
        </Button>
        <Button type="button" size="small" className={styles.itemBtn}>
          정기적으로 모여요
        </Button>
        <Button type="button" size="small" className={styles.itemBtn}>
          30대
        </Button>
      </Stack>
      <Stack sx={{ py: "20px" }} justifyContent="center" alignItems="center">
        <Pagination count={5} sx={{ fontStyle: "italic" }} />
      </Stack>
    </React.Fragment>
  );
}
