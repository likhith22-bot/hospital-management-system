import React from "react";
import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import Footer from "../components/home/Footer";
import { Box } from "@mui/material";

function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <HeroSection />
        <FeaturesSection />
      </Box>
      <Footer />
    </Box>
  );
}

export default HomePage;
