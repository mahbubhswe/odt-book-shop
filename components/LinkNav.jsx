import React from "react";
import { Stack } from "@mui/material";
import Link from "next/link";
export default function LinkNav() {
  return (
    <Stack direction="row" spacing={3} mt={5} mb={1.5}>
      <Link href="/">
        <a>일정</a>
      </Link>
      <Link href="/">
        <a>게시판</a>
      </Link>
      <Link href="/">
        <a>인원</a>
      </Link>
      <Link href="/">
        <a>자세히</a>
      </Link>
    </Stack>
  );
}
