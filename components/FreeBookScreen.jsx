import { Grid, Pagination, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function FreeBookScreen({ freeBookList }) {
  return (
    <React.Fragment>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ background: "#F4F4F4", borderRadius: "8px" }}
      >
        {freeBookList.map((item) => (
          <Grid
            item
            key={item.id}
            sx={{
              widht: "80px",
              height: "100px",
              m: "30px",
              "&:hover": {
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              },
            }}
          >
            <Link href="/" passHref>
              <a>
                <Image src={item.img} height={100} width={80} quality={100} />
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>

      <Stack sx={{ py: "20px" }} justifyContent="center" alignItems="center">
        <Pagination count={5} sx={{ fontStyle: "italic" }} />
      </Stack>
    </React.Fragment>
  );
}
