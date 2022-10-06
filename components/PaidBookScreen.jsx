import {
  Stack,
  Box,
  Pagination,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonNav from "./ButtonNav";
import LinkNav from "./LinkNav";
import styles from "../styles/paidBook.module.css";
export default function FreeBookScreen({ paidBookList }) {
  return (
    <React.Fragment>
      <Box ml={1.5}>
        <Typography>
          “ 공상 과학 소설, 영화 그리고 커피를 좋아하는 사람들 ”
        </Typography>
        <ButtonNav />
        <LinkNav />
        <Button type="button" size="small" className={styles.itemBtn}>
          공지사항
        </Button>
        {/* display book list */}
        <Grid container mt={3} spacing={0}>
          {paidBookList.map((item, index) => {
            return (
              <Grid item className={styles.bookItem}>
                <Link href="/">
                  <a>
                    <Image
                      src={item.img}
                      alt="paid book"
                      height={213}
                      width={index === 1 ? 300 : 128}
                      quality={100}
                    />
                  </a>
                </Link>
              </Grid>
            );
          })}
        </Grid>
        {/* pagination */}
        <Stack sx={{ py: "20px" }} justifyContent="center" alignItems="center">
          <Pagination count={5} sx={{ fontStyle: "italic" }} />
        </Stack>
      </Box>
    </React.Fragment>
  );
}
