import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerPatient } from "../services/patientService";
import {
  Box,
  Button,
  Typography,
  Container,
  Paper,
  Stack,
  Alert,
} from "@mui/material";
import { HomeRounded, LoginRounded, PersonAddAlt1Rounded } from "@mui/icons-material";
import RegisterPatientForm from "../components/common/RegisterPatientForm";
import { validatePatientRegistration } from "../Javascript/patientValidation";

const RegisterPatient = () => {
  const [patientData, setPatientData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    country: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const validateForm = () => {
    const { errors: newErrors, isValid } = validatePatientRegistration(patientData);
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await registerPatient(patientData);
      setMessage("Patient registered successfully!");
      setPatientData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        gender: "",
        dateOfBirth: "",
        address: "",
        city: "",
        state: "",
        country: "",
        password: "",
      });
      setErrors({});
    } catch (error) {
      setMessage(error.message);
    }
  };

  const isSuccess = message && message.toLowerCase().includes("success");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 4, md: 6 },
        px: 2,
        background: (theme) =>
          `linear-gradient(160deg, ${theme.palette.background.default} 0%, #e0f2f1 45%, ${theme.palette.secondary.main} 120%)`,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            overflow: "hidden",
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
          }}
        >
          <Box
            sx={{
              px: { xs: 2.5, sm: 4 },
              py: { xs: 2.5, sm: 3 },
              background: (theme) =>
                `linear-gradient(120deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              color: "common.white",
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: 2,
                  bgcolor: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PersonAddAlt1Rounded sx={{ fontSize: 30 }} />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  Patient registration
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.25 }}>
                  Create your LifeBridge Hospital account in a few minutes
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Box sx={{ p: { xs: 2.5, sm: 4 } }}>
            {message && (
              <Alert severity={isSuccess ? "success" : "error"} sx={{ mb: 3 }}>
                {message}
              </Alert>
            )}

            <RegisterPatientForm
              patientData={patientData}
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="space-between"
              sx={{ mt: 4 }}
            >
              <Button
                component={Link}
                to="/"
                variant="outlined"
                color="secondary"
                startIcon={<HomeRounded />}
                sx={{ borderRadius: 2 }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/login"
                variant="contained"
                startIcon={<LoginRounded />}
                sx={{ borderRadius: 2, boxShadow: "0 8px 24px rgba(13, 148, 136, 0.3)" }}
              >
                Already registered? Sign in
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterPatient;
