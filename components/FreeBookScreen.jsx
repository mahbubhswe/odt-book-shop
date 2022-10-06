import { Stack, Typography, Pagination, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FreeBookScreen({ freeBookList }) {
  // convert array to a matrix
  const rows = freeBookList.reduce(function (rows, key, index) {
    return (
      (index % 4 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return (
    <React.Fragment>
      <Box
        sx={{
          width: { xs: "99%", sm: "90%", md: "80%" },
          margin: "auto",
          mt: { xs: "20px", sm: "50px", md: "80px" },
        }}
      >
        {rows.map((row) => (
          <div key={row.key}>
            <Typography
              component="div"
              sx={{
                background: "#F4F4F4",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                marginTop: "35px",
              }}
            >
              {row.map((col) => (
                <Typography
                  key={col.id}
                  component="div"
                  sx={{
                    margin: {
                      xs: "25px",
                      sm: "10px 35px -7px 35px",
                      md: "10px 35px -7px 35px",
                    },
                    "&:hover": {
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    },
                  }}
                >
                  <Link href="/">
                    <a>
                      <Image
                        src={col.img}
                        alt="Book"
                        width={80}
                        height={100}
                        quality={100}
                      />
                    </a>
                  </Link>
                </Typography>
              ))}
            </Typography>
            <div className="borderDiv">i</div>
          </div>
        ))}
      </Box>
      <Stack sx={{ py: "100px" }} justifyContent="center" alignItems="center">
        <Pagination count={5} sx={{ fontStyle: "italic" }} />
      </Stack>
    </React.Fragment>
  );
}
