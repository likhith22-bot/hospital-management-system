import React from "react";
import { Container, Paper, Typography, Box, Stack } from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import { motion } from "framer-motion";

const features = [
  {
    icon: PersonRoundedIcon,
    title: "Patient management",
    description: "Centralized records, appointments, and history in a clear, modern dashboard.",
    accent: "#0d9488",
  },
  {
    icon: MedicalServicesRoundedIcon,
    title: "Clinical coordination",
    description: "Align doctors, nurses, and staff with schedules and care pathways that stay in sync.",
    accent: "#1e3a5f",
  },
  {
    icon: PaymentsRoundedIcon,
    title: "Billing & insights",
    description: "Track payments and trends with reporting designed for busy hospital teams.",
    accent: "#0f766e",
  },
];

function FeaturesSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(180deg, rgba(236, 253, 245, 0.9) 0%, #ffffff 35%, #f8fafc 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
          <Typography
            variant="overline"
            sx={{ color: "primary.dark", fontWeight: 700, letterSpacing: "0.2em" }}
          >
            Why LifeBridge
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              color: "secondary.main",
              maxWidth: 640,
              fontSize: { xs: "1.75rem", md: "2.25rem" },
            }}
          >
            Everything your hospital needs, beautifully organized
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560 }}>
            A calm, professional interface so patients and staff can focus on care—not clicks.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 4,
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    background:
                      "linear-gradient(145deg, #ffffff 0%, rgba(240, 253, 250, 0.65) 100%)",
                    boxShadow: "0 18px 50px rgba(15, 23, 42, 0.06)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 24px 60px rgba(15, 23, 42, 0.1)",
                    },
                  }}
                >
                  <Stack spacing={2.5} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: `${feature.accent}14`,
                        color: feature.accent,
                        border: `1px solid ${feature.accent}33`,
                      }}
                    >
                      <Icon sx={{ fontSize: 30 }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: "secondary.main" }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {feature.description}
                    </Typography>
                  </Stack>
                </Paper>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default FeaturesSection;
