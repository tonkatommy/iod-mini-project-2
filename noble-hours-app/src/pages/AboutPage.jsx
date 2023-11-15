import apikey from "../../secret/apikey";

import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import Map from "../components/Maps/Map";

const AboutPage = (props) => {
  console.log(apikey);
  return (
    <>
      <Container
        maxWidth="md"
        sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ my: 5 }}>
          About Page
        </Typography>
        <Typography
          variant="body1"
          sx={{ my: 5 }}>
          Located here:
        </Typography>
        <Box sx={{ width: "100%", height: "400px", mx: "auto" }}>
          <Map></Map>
        </Box>
      </Container>
    </>
  );
};

export default AboutPage;
