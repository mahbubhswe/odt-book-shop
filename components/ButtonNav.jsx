import React from "react";
import { Stack, Button } from "@mui/material";
import Link from "next/link";
import styles from "../styles/paidBook.module.css";
export default function ButtonNav() {
  return (
    <Stack direction="row" spacing={0.2} mt={1}>
      <Link href="/">
        <Button
          type="button"
          size="small"
          component="a"
          className={styles.itemBtn}
        >
          서울/경기
        </Button>
      </Link>
      <Link href="/">
        <Button
          type="button"
          size="small"
          component="a"
          className={styles.itemBtn}
        >
          직장인
        </Button>
      </Link>

      <Link href="/">
        <Button
          type="button"
          size="small"
          component="a"
          className={styles.itemBtn}
        >
          정기적으로 모여요
        </Button>
      </Link>

      <Link href="/">
        <Button
          type="button"
          size="small"
          component="a"
          className={styles.itemBtn}
        >
          30대
        </Button>
      </Link>
    </Stack>
  );
}
