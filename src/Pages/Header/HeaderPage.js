import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "./Header";
import HeaderForm from "./HeaderForm";

const HeaderPage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <HeaderForm />
        </Grid>
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              minHeight: "60vh",
              display: "flex",
              alignItems: "center",
              padding: "0 1rem",
            }}
          >
            <Header />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderPage;
