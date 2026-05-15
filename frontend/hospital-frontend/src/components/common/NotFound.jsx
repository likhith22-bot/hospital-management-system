import React from "react";
import { Box, Button, Container, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        background: (theme) =>
          `linear-gradient(180deg, ${theme.palette.background.default} 0%, #ffffff 100%)`,
      }}
    >
      <Container maxWidth="sm">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Box
            sx={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              bgcolor: "primary.light",
              color: "primary.dark",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.9,
            }}
          >
            <SearchOffRoundedIcon sx={{ fontSize: 48 }} />
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 800, color: "secondary.main" }}>
            Page not found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 420 }}>
            The page you are looking for does not exist or may have been moved. Check the URL or
            return to the home page.
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            size="large"
            startIcon={<HomeRoundedIcon />}
            sx={{ borderRadius: 2, px: 3 }}
          >
            Back to home
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
