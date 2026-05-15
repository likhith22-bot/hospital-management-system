import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Avatar,
  Paper,
  Stack,
  Alert,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  HomeRounded,
  LockRounded,
  EmailRounded,
  LoginRounded,
} from "@mui/icons-material";
import { loginUser } from "../services/authService";
import isTokenExpired from "../utils/isTokenExpired";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email || !password) {
      setMessage("Please enter both email and password.");
      return;
    }

    const credentials = { email, password };
    try {
      const response = await loginUser(credentials);
      if (isTokenExpired(response.token)) {
        setMessage("Session Expired. Please login again.");
        return;
      }

      if (!response || !response.token) {
        setMessage("Invalid response from server. Please try again.");
        return;
      }

      sessionStorage.setItem("token", response.token);

      const roleRoutes = {
        ROLE_PATIENT: "/patient/profile",
        ROLE_ADMIN: "/admin/profile",
        ROLE_DOCTOR: "/doctor/profile",
        ROLE_NURSE: "/nurse/profile",
        ROLE_STAFF: "/staff/profile",
      };

      const route = roleRoutes[response.role];
      if (route) {
        navigate(route);
      } else {
        setMessage("Unknown role. Please contact support.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Login failed. Please check your credentials or try again later.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 4, sm: 6 },
        px: 2,
        background: (theme) =>
          `linear-gradient(145deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.primary.dark} 42%, ${theme.palette.secondary.main} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.35,
          background:
            "radial-gradient(circle at 20% 20%, rgba(45, 212, 191, 0.35), transparent 45%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.2), transparent 40%)",
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
          }}
        >
          <Stack spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Avatar
              src={`${process.env.PUBLIC_URL}/WebsiteLogo.png`}
              alt="LifeBridge Hospital"
              sx={{
                width: 88,
                height: 88,
                border: "3px solid",
                borderColor: "primary.light",
                boxShadow: "0 8px 24px rgba(13, 148, 136, 0.25)",
              }}
            />
            <Box textAlign="center">
              <Typography variant="h4" sx={{ fontWeight: 800, color: "secondary.main" }}>
                Welcome back
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                Sign in to LifeBridge Hospital portal
              </Typography>
            </Box>
          </Stack>

          <form onSubmit={handleLogin}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailRounded color="action" />
                    </InputAdornment>
                  ),
                }}
                required
              />
              <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockRounded color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((p) => !p)}
                        edge="end"
                        aria-label="toggle password"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                required
              />

              {message && <Alert severity="error">{message}</Alert>}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                startIcon={<LoginRounded />}
                sx={{
                  mt: 1,
                  py: 1.25,
                  fontSize: "1rem",
                  boxShadow: "0 10px 28px rgba(13, 148, 136, 0.35)",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </form>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            justifyContent="space-between"
            alignItems={{ xs: "stretch", sm: "center" }}
            sx={{ mt: 3 }}
          >
            <Button
              component={Link}
              to="/"
              variant="text"
              color="secondary"
              startIcon={<HomeRounded />}
            >
              Home
            </Button>
            <Button component={Link} to="/register" variant="text" color="primary">
              Create patient account
            </Button>
          </Stack>
          <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 2, textAlign: "center" }}>
            Forgot your password? Please contact hospital administration.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default LoginPage;
