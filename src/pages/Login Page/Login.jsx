import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import NavBar from "../../components/NavBar/NavBar";
import { Paper } from "@mui/material";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login authentication here
    console.log("Email:", email);
    console.log("Password:", password);
    if(email==="user@example.com" && password === "password"){
        setLoginSuccess(true)
    }else{
        setLoginSuccess(false);
    }
    // Example: You can redirect the user to the dashboard page upon successful login
    // history.push('/dashboard');
    navigate("/");
  };
  return (
    <div className="Login_Page">
      {loginSuccess && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="success">Login successful! Redirecting...</Alert>
        </Stack>
      )}
      <div className="Nav_Bar">
        <NavBar />
      </div>
      <div className="Login_Contenet">
        <div className="Login_header">
          <h1 className="title">Sign in</h1>
          <hr />
        </div>
        <Paper elevation={3} sx={{ width: "600px", margin: "0 auto" }}>
          <Container
            component="main"
            style={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "500px",
            }}
          >
            <form
              style={{ width: "100%", marginTop: "1rem" }}
              onSubmit={handleSubmit}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="error"
                style={{ margin: "3rem 0 2rem" }}
              >
                Sign In
              </Button>
            </form>
          </Container>
        </Paper>
      </div>
    </div>
  );
};

export default Login;
