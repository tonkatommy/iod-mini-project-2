import { Box, Container } from "@mui/system";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MasonryImageList from "../components/Layout/MasonryImageList";
import watches from "../assets/json/watches.json";

const HomePage = (props) => {
  const navigate = useNavigate();

  const handleCta = (e) => {
    navigate("/shop");
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
          }}>
          <Typography
            variant="h2"
            sx={{ textAlign: "center", my: 6 }}>
            Welcome to Noble Hours
          </Typography>
          <Typography
            variant="h4"
            sx={{ textAlign: "center" }}>
            Find the perfect watch for your lifestyle
          </Typography>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            onClick={handleCta}
            sx={{ width: "300px", mx: "auto", my: 3 }}>
            Shop Now
          </Button>
          <MasonryImageList watches={watches}></MasonryImageList>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
