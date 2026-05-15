# Hospital Management System

## Overview
Hospital Management System is a full-stack application designed to streamline hospital workflows for patients, medical staff, and administrators. It combines a Spring Boot backend with a React frontend to provide secure authentication, appointment scheduling, patient management, and administrative controls.

## Key Features
- Role-based access for Patients, Doctors, Nurses/Staff, and Admin users
- Patient registration, login, and appointment booking
- Doctor and department management
- Appointment tracking and status updates
- Medical record viewing and prescription handling
- Secure authentication with JWT-based authorization

## Technology Stack
- Backend: Java, Spring Boot, Spring Security, Spring Data JPA
- Frontend: React, React Router, Axios
- Database: MySQL / PostgreSQL (configurable)
- Build tools: Maven for backend, npm for frontend

## Repository Structure
- `backend/hospital/`: Spring Boot application source code and configuration
- `frontend/hospital-frontend/`: React frontend application
- `.gitignore`: common ignore patterns for Java, Node, and OS files
- `README.md`: project documentation

## Installation
### 1. Clone the repository
```bash
git clone https://github.com/likhith22-bot/hospital-management-system.git
cd hospital-management-system
```

### 2. Backend setup
```bash
cd backend/hospital
./mvnw clean install
```
- Configure database connection in `src/main/resources/application.properties`.
- Run the backend:
```bash
./mvnw spring-boot:run
```

### 3. Frontend setup
```bash
cd ../../frontend/hospital-frontend
npm install
npm start
```
- The frontend will typically run at `http://localhost:3000`.
- Ensure backend API endpoints are reachable from the frontend.

## Configuration
Update backend database and security settings in:
- `backend/hospital/src/main/resources/application.properties`

For frontend API settings, update:
- `frontend/hospital-frontend/src/api/axiosConfig.js`

## Project Modules
### Patient
- Register and login
- Book appointments
- View appointment history
- Access medical records

### Doctor
- View schedule and appointments
- Review patient details
- Manage prescriptions and diagnosis

### Admin
- Create and manage doctors, nurses, and departments
- Monitor appointments and system activity
- Generate reports and manage users

### Nurse / Staff
- View assigned patient records
- Update vitals and patient status
- Support doctor workflows

## Development Notes
- Authentication is handled using JWT tokens.
- Persistence is managed with Spring Data JPA.
- The frontend uses Axios for REST API communication.
- The application is designed for extensibility and enterprise use.

## Contribution
Contributions are welcome. Please open an issue or submit a pull request with proposed improvements.

## License
This project is provided under the MIT License.
