import React, { useState } from "react";
import { TextField, FormControl, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { Box, textAlign } from "@mui/system";
import Typography from "@mui/material/Typography";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { currentUser, handleUpdateUser } = useUserContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordError(true);
    }

    if (email && password) {
      handleUpdateUser({ email, password });
    }
  };

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}>
          <Typography
            variant="h5"
            sx={{ my: 4 }}>
            Login Form
          </Typography>
          <TextField
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="email"
            sx={{ mb: 3 }}
            fullWidth
            value={email}
            error={emailError}
          />
          <TextField
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="password"
            value={password}
            error={passwordError}
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            size="large">
            Login
          </Button>
          <Typography
            variant="body2"
            sx={{ mt: 2 }}>
            Need an account? <Link to="/user/register">Register here</Link>
          </Typography>
        </form>
      </Box>
    </>
  );
};

export default LoginForm;
