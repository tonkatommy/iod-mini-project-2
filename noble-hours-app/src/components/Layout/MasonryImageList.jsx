import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function MasonryImageList({ watches }) {
  return (
    <Box
      sx={{ width: 500, height: 400, overflowY: "scroll", mx: "auto", my: 3 }}>
      <ImageList
        variant="masonry"
        cols={3}
        gap={8}>
        {watches.map((watch) => (
          <ImageListItem key={watch.images[0]}>
            <img
              srcSet={`${watch.images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${watch.images[0]}?w=248&fit=crop&auto=format`}
              alt={watch.name}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
