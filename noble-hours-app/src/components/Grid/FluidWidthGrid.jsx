import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import watches from "../../assets/json/watches.json";
import ImgMediaCard from "../Cards/ImgMediaCard";

// Originally using axios to get data from API
// however too many API calls were made. I have 'cached' the
// data into a json file for development purposes.

// import axios from "axios";
// import { useGetData } from "../../hooks/useGetData";

const FullWidthGrid = () => {
  // const watches = useGetData("./watches.json");

  return (
    // Box component to hold the grid
    <Box sx={{ flexGrow: 1 }}>
      {/* Grid component to hold the watches */}
      <Grid
        container
        spacing={2}>
        {/* Map to return an ImageMediaCard for each watch */}
        {watches.map((watch) => (
          <Grid
            xs={12}
            sm={6}
            md={4}
            lg={3}>
            {/* Pass each watch via props to the Card component */}
            <ImgMediaCard watch={watch} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FullWidthGrid;
