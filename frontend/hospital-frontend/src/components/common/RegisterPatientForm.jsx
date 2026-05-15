import React from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  InputAdornment,
} from "@mui/material";
import {
  PersonRounded,
  EmailRounded,
  PhoneRounded,
  LockRounded,
  HowToRegRounded,
} from "@mui/icons-material";

const RegisterPatientForm = ({
  patientData,
  errors,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2.5,
        }}
      >
        <TextField
          label="First name"
          name="firstName"
          value={patientData.firstName}
          onChange={handleChange}
          error={!!errors.firstName}
          helperText={errors.firstName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonRounded color="action" fontSize="small" />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
        <TextField
          label="Last name"
          name="lastName"
          value={patientData.lastName}
          onChange={handleChange}
          error={!!errors.lastName}
          helperText={errors.lastName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonRounded color="action" fontSize="small" />
              </InputAdornment>
            ),
          }}
          fullWidth
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={patientData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailRounded color="action" fontSize="small" />
              </InputAdornment>
            ),
          }}
          fullWidth
          sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}
        />

        <TextField
          label="Phone number"
          name="phoneNumber"
          value={patientData.phoneNumber}
          onChange={handleChange}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneRounded color="action" fontSize="small" />
              </InputAdornment>
            ),
          }}
          fullWidth
        />

        <FormControl fullWidth error={!!errors.gender}>
          <InputLabel>Gender</InputLabel>
          <Select name="gender" value={patientData.gender} onChange={handleChange} label="Gender">
            <MenuItem value="">
              <em>Select gender</em>
            </MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
          {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
        </FormControl>

        <TextField
          type="date"
          name="dateOfBirth"
          value={patientData.dateOfBirth}
          onChange={handleChange}
          label="Date of birth"
          InputLabelProps={{ shrink: true }}
          fullWidth
          error={!!errors.dateOfBirth}
          helperText={errors.dateOfBirth}
          sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}
        />

        <TextField
          label="Address"
          name="address"
          value={patientData.address}
          onChange={handleChange}
          error={!!errors.address}
          helperText={errors.address}
          fullWidth
          sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}
        />

        <TextField
          label="City"
          name="city"
          value={patientData.city}
          onChange={handleChange}
          error={!!errors.city}
          helperText={errors.city}
          fullWidth
        />

        <TextField
          label="State"
          name="state"
          value={patientData.state}
          onChange={handleChange}
          error={!!errors.state}
          helperText={errors.state}
          fullWidth
        />

        <TextField
          label="Country"
          name="country"
          value={patientData.country}
          onChange={handleChange}
          error={!!errors.country}
          helperText={errors.country}
          fullWidth
          sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={patientData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockRounded color="action" fontSize="small" />
              </InputAdornment>
            ),
          }}
          fullWidth
          sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}
        />

        <Box sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            startIcon={<HowToRegRounded />}
            sx={{
              mt: 1,
              py: 1.25,
              borderRadius: 2,
              boxShadow: "0 10px 28px rgba(13, 148, 136, 0.3)",
            }}
          >
            Complete registration
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default RegisterPatientForm;
