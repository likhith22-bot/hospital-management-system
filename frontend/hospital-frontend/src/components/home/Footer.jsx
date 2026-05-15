import React from "react";
import { Box, Container, Typography, Stack, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 5, md: 6 },
        background: (theme) =>
          `linear-gradient(165deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 40%, #0b1220 100%)`,
        color: "rgba(255,255,255,0.88)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, color: "common.white", mb: 1 }}>
              LifeBridge Hospital
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 360, opacity: 0.85, lineHeight: 1.7 }}>
              Compassionate care supported by a modern digital experience for patients and teams.
            </Typography>
          </Box>
          <Stack spacing={1.5} sx={{ minWidth: { md: 220 } }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneRoundedIcon sx={{ fontSize: 20, opacity: 0.9 }} />
              <Typography variant="body2">+1 (555) 010‑2040</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailRoundedIcon sx={{ fontSize: 20, opacity: 0.9 }} />
              <Typography variant="body2">hello@lifebridgehospital.org</Typography>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
              <MuiLink component={Link} to="/login" underline="hover" color="inherit" variant="body2">
                Login
              </MuiLink>
              <MuiLink component={Link} to="/register" underline="hover" color="inherit" variant="body2">
                Register
              </MuiLink>
            </Stack>
          </Stack>
        </Stack>
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            textAlign: { xs: "left", sm: "center" },
          }}
        >
          <Typography variant="caption" sx={{ opacity: 0.75 }}>
            © {new Date().getFullYear()} LifeBridge Hospital. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
