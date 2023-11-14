import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicModal from "../Modal/BasicModal";
import { Box } from "@mui/system";

const ImgMediaCard = ({ watch }) => {
  return (
    <Card
      sx={{ maxWidth: 345, display: "flex" }}
      key={watch.wb.id}>
      <CardMedia
        component="img"
        alt={"Image of " + watch.name}
        height="140"
        image={watch.images[0]}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography
            variant="subtitle2"
            component="div">
            {watch.brand.name}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div">
            {watch.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary">
            {watch.family.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <BasicModal watch={watch} />
        </CardActions>
      </Box>
    </Card>
  );
};

export default ImgMediaCard;
