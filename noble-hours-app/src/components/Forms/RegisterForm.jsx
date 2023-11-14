import React, { useState } from "react";
import { TextField, Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, dateOfBirth, password);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action={<Link to="/login" />}>
        <Typography
          variant="h5"
          sx={{ my: 4 }}>
          Register Form
        </Typography>
        <Stack
          spacing={2}
          direction="row"
          sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            fullWidth
            required
          />
        </Stack>
        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="password"
          variant="outlined"
          color="secondary"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          type="date"
          variant="outlined"
          color="secondary"
          label="Date of Birth"
          onChange={(e) => setDateOfBirth(e.target.value)}
          value={dateOfBirth}
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 4 }}
        />
        <Button
          variant="outlined"
          color="secondary"
          type="submit"
          size="large">
          Register
        </Button>
        <Typography
          variant="body2"
          sx={{ mt: 2 }}>
          Already have an account? <Link to="/user/login">Login Here</Link>
        </Typography>
      </form>
    </>
  );
};

export default RegisterForm;
