import { Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { Box, Container, textAlign } from "@mui/system";
import { Typography } from "@mui/material";

const UserPage = (props) => {
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ mt: 5 }}>
          User Page
        </Typography>
        <Box sx={{ width: "100%", mx: "auto" }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default UserPage;
