import React from "react";
import { Grid, Box } from "@mui/material";
import Sort from "../components/Sort";
import Filter from "../components/Filter";
import Tablee from "../components/Table";
import HeaderBar from "../components/HeaderBar";
import Paginationn from "../components/Pagination";
import Search from "../components/Search";
function HomePage() {
  return (
    <div>
      <HeaderBar />
      <Grid container>
        <Grid container spacing={2} sx={{ marginTop: 5, padding: 5 }}>
          <Grid item lg={4} md={4} sm={4} textAlign="left">
            <Sort />
          </Grid>

          <Grid item lg={4} md={4} sm={4} textAlign="center">
            <Search />
          </Grid>

          <Grid item lg={4} md={4} sm={4} textAlign="right">
            <Filter />
          </Grid>

          <Grid item xs={12}>
            <Tablee />
          </Grid>

          <Grid item xs={6} textAlign="right">
            <Paginationn />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
