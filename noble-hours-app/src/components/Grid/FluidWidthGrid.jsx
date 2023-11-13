import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import watches from "../../assets/json/watches.json";
import ImgMediaCard from "../Cards/ImgMediaCard";
// import axios from "axios";
// import { useGetData } from "../../hooks/useGetData";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const FullWidthGrid = () => {
  // const watches = useGetData("./watches.json");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}>
        {watches.map((watch) => (
          <Grid
            xs={6}
            md={3}>
            <ImgMediaCard watch={watch} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FullWidthGrid;
