import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Container, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "85vh", md: "92vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundImage: `linear-gradient(120deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 118, 110, 0.55) 45%, rgba(15, 23, 42, 0.75) 100%), url(${process.env.PUBLIC_URL}/assets/images/Hero.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(45, 212, 191, 0.18), transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, py: { xs: 8, md: 10 } }}>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Chip
              label="Trusted hospital management"
              sx={{
                bgcolor: "rgba(255,255,255,0.12)",
                color: "common.white",
                border: "1px solid rgba(255,255,255,0.28)",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontSize: "0.7rem",
              }}
            />
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: "common.white",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                fontSize: { xs: "2.1rem", sm: "2.75rem", md: "3.25rem" },
                textShadow: "0 12px 40px rgba(0,0,0,0.35)",
              }}
            >
              Care for every life,{" "}
              <Box component="span" sx={{ color: "primary.light" }}>
                bridged by technology
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.88)",
                maxWidth: 560,
                fontWeight: 500,
                lineHeight: 1.6,
                fontSize: { xs: "1rem", md: "1.15rem" },
              }}
            >
              Book visits, manage records, and stay connected with your care team—all in one
              secure place.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ pt: 1, width: { xs: "100%", sm: "auto" } }}
            >
              <Button
                component={Link}
                to="/register"
                variant="contained"
                size="large"
                startIcon={<CalendarMonthRoundedIcon />}
                sx={{
                  px: 3,
                  py: 1.25,
                  bgcolor: "primary.main",
                  color: "common.white",
                  boxShadow: "0 12px 32px rgba(13, 148, 136, 0.45)",
                  "&:hover": {
                    bgcolor: "primary.light",
                    transform: "translateY(-1px)",
                  },
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                Book an appointment
              </Button>
              <Button
                component={Link}
                to="/login"
                variant="outlined"
                size="large"
                startIcon={<LoginRoundedIcon />}
                sx={{
                  px: 3,
                  py: 1.25,
                  color: "common.white",
                  borderColor: "rgba(255,255,255,0.55)",
                  "&:hover": {
                    borderColor: "common.white",
                    bgcolor: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                Staff & patient login
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </motion.div>
  );
}

export default HeroSection;
