import React from "react";
import Avatar from "@mui/material/Avatar";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";

import LockOpenIcon from "@mui/icons-material/LockOpen";

import authService from "./Service";
import { useNavigate } from "react-router-dom";

export default function SignInSide(props) {
  const navigate = useNavigate();
  if (authService.isLoggedIn()) {
    navigate("/");
  }

  const [account, setAccount] = React.useState({ username: "", password: "" });

  const handelAccount = (property, event) => {
    const accountCopy = { ...account };
    accountCopy[property] = event.target.value;

    setAccount(accountCopy);
  };

  const handelLogin = () => {
    authService.doLogIn(account.username);
    setAccount({ username: "", password: "" });
    navigate("/dashboard/home");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handelLogin();
  };

  return (
    <Grid
      container
      component="main"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={1}
        square
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            margin: "2rem 0rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar style={{ margin: 0, backgroundColor: "#f50057" }}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ marginTop: "1rem" }}>
            Sign in
          </Typography>
          <form
            style={{ width: "100%", marginTop: "1rem" }}
            onSubmit={handleFormSubmit}
            noValidate
          >
            <TextField
              onChange={(event) => handelAccount("username", event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            <TextField
              onChange={(event) => handelAccount("password", event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: "2rem 0 1rem" }}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
