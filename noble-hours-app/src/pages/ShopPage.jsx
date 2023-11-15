import { Box, Container } from "@mui/system";
import { Typography, Avatar, Button, Stack } from "@mui/material";
import FullWidthGrid from "../components/Layout/FluidWidthGrid";
import watchList from "../assets/json/watches.json";
import { useState } from "react";

const ShopPage = (props) => {
  let brandId;

  const [watches, setWatches] = useState(watchList);
  const [filtered, setFiltered] = useState(false);

  const handleFilter = (e) => {
    // filter watches
    console.log(e.target.alt);
    const filteredList = watchList.filter((watch) => {
      return watch.brand.name == e.target.alt;
    });
    setWatches(filteredList);
    setFiltered(true);
  };

  const handleReset = (e) => {
    setFiltered(false);
    setWatches(watchList);
  };

  return (
    <>
      <Container>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", my: 5 }}>
          ShopPage
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Stack
            direction={"row"}
            spacing={2}>
            {watchList.map((watch) => {
              if (brandId !== watch.brand.id) {
                brandId = watch.brand.id;
                return (
                  <Button
                    key={brandId}
                    variant="outlined"
                    sx={{
                      width: "100px",
                      height: "100px",
                    }}>
                    <Avatar
                      variant="rounded"
                      alt={watch.brand.name}
                      src={watch.brand.logo}
                      value={brandId}
                      onClick={handleFilter}
                      sx={{
                        width: "80px",
                        height: "80px",
                        "& .MuiAvatar-img": {
                          objectFit: "contain",
                        },
                      }}
                    />
                  </Button>
                );
              }
            })}
          </Stack>
        </Box>
        {filtered ? (
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Button
              variant="contained"
              color="warning"
              sx={{ mx: "auto" }}
              onClick={handleReset}>
              Reset
            </Button>
          </Box>
        ) : null}

        <FullWidthGrid watches={watches} />
      </Container>
    </>
  );
};

export default ShopPage;
