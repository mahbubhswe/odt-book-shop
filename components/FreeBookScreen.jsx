import { Grid, Pagination, Stack, Typography } from "@mui/material";
import Image from "next/image";
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
            sx={{ widht: "80px", height: "100px", m: "30px" }}
          >
            <Image src={item.img} height={100} width={80} quality={100} />
          </Grid>
        ))}
      </Grid>

      <Stack sx={{ mt: "80px",py:"5px" }} justifyContent="center" alignItems="center">
        <Pagination count={5} sx={{ fontStyle: "italic" }} />
      </Stack>
    </React.Fragment>
  );
}
