import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 55%, ${theme.palette.primary.dark} 100%)`,
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1, minHeight: 72 }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              color: "inherit",
              mr: 2,
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                bgcolor: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.25)",
                overflow: "hidden",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/WebsiteLogo.png`}
                alt=""
                style={{ width: 36, height: 36, objectFit: "contain" }}
              />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em" }}
              >
                LifeBridge Hospital
              </Typography>
              <Typography
                variant="caption"
                sx={{ opacity: 0.85, display: "flex", alignItems: "center", gap: 0.5 }}
              >
                <LocalHospitalRoundedIcon sx={{ fontSize: 14 }} />
                Care that connects
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              color="inherit"
              component={Link}
              to="/login"
              sx={{
                borderRadius: 2,
                px: 2,
                color: "common.white",
                border: "1px solid rgba(255,255,255,0.45)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/register"
              sx={{
                borderRadius: 2,
                px: 2.5,
                bgcolor: "primary.main",
                color: "common.white",
                boxShadow: "0 8px 20px rgba(13, 148, 136, 0.35)",
                "&:hover": {
                  bgcolor: "primary.light",
                  boxShadow: "0 10px 24px rgba(13, 148, 136, 0.45)",
                },
              }}
            >
              Register
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
