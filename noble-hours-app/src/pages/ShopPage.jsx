import { Box, Container } from "@mui/system";
import FullWidthGrid from "../components/Grid/FluidWidthGrid";
import { Typography, Avatar, Button } from "@mui/material";
import watches from "../assets/json/watches.json";
import { Link } from "react-router-dom";

const ShopPage = (props) => {
  let brandId;
  return (
    <>
      <Container>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", my: 5 }}>
          ShopPage
        </Typography>
        {/* <CardMedia
          component="img"
          alt={"Image of "}
          // height="20"
          image="https://cdn.watchbase.com/brand/lg/tag-heuer-ec.png"
          sx={{ width: "100px" }}
        /> */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {watches.map((watch) => {
            if (brandId !== watch.brand.id) {
              brandId = watch.brand.id;
              return (
                <Button
                  variant="contained"
                  startIcon={
                    <Avatar
                      variant="rounded"
                      alt={watch.brand.name}
                      src={watch.brand.logo}
                      sx={{ width: "90px", height: "90px" }}
                    />
                  }
                  sx={{
                    width: "100px",
                    height: "100px",
                  }}>
                  {/* <img
                    src={watch.brand.logo}
                    alt={watch.brand.name}
                    object-fit="cover"
                  /> */}
                </Button>
              );
            }
          })}
        </Box>

        <FullWidthGrid />
      </Container>
    </>
  );
};

export default ShopPage;
