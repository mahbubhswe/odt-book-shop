import { Stack, Grid, Pagination } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function FreeBookScreen({ freeBookList }) {
  const array = [0, 1, 2, 3, 4, 5, 6, 7];
  const rows = array.reduce(function (rows, key, index) {
    return (
      (index % 4 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);
  return (
    <React.Fragment>
      {rows.map((row) => (
        <Link href="/">
          <a>
            {row.key}
            {/* <Image
              src={row.img}
              alt="Book"
              width={80}
              height={100}
              quality={100}
            /> */}
          </a>
        </Link>
      ))}
      <Stack sx={{ py: "20px" }} justifyContent="center" alignItems="center">
        <Pagination count={5} sx={{ fontStyle: "italic" }} />
      </Stack>
    </React.Fragment>
  );
}
