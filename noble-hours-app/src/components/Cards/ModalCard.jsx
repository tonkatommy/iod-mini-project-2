import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "row",
};

export default function ModalCard({ watch }) {
  return (
    <Card>
      <Box sx={style}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Typography
              component="div"
              variant="subtitle2">
              {watch.brand.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div">
              {watch.family.name}
            </Typography>
            <Typography
              variant="h6"
              component="div">
              {watch.name}
            </Typography>
            <Typography
              variant="body2"
              component="div">
              {watch.description}
            </Typography>
          </CardContent>
        </Box>

        <CardMedia
          sx={{ width: 600 }}
          component="img"
          image={watch.images[0]}
          alt={watch.name}
        />
      </Box>
    </Card>
  );
}
