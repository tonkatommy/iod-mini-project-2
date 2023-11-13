import { Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { Box, Container, textAlign } from "@mui/system";

const UserPage = (props) => {
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ textAlign: "center" }}>
        <h1>User Page</h1>
        <Box sx={{ width: "100%", mx: "auto" }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default UserPage;
