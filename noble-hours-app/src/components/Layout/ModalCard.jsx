import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
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

const ModalCard = React.forwardRef(({ watch }, ref) => {
  return (
    <Card ref={ref}>
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
            <Typography
              variant="caption"
              color="text.dark">
              {watch.prices ? "$" + watch.prices[0].watch_price : "$n/a"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Buy</Button>
            <Button size="small">Close</Button>
          </CardActions>
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
});
export default ModalCard;
