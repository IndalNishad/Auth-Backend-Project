# Backend Authentication System

A modern authentication backend built with **Node.js, Express.js, MongoDB, Mongoose, and Zod**.

This project is being developed step by step to understand how modern authentication systems are designed, implemented, and secured.

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Zod
* bcrypt
* JavaScript (ES Modules)

## Current Progress

* ☑ Express server setup
* ☑ Environment configuration
* ☑ MongoDB connection
* ☑ Mongoose setup
* ☑ User model
* ☑ Git/GitHub setup
* ☑ Authentication routes
* ☑ Authentication controller
* ☑ Authentication service
* ☑ Registration API
* ☑ Request validation with Zod
* ☑ Password confirmation validation
* ☑ Check if email already exists
* ☑ Password hashing
* ☑ Create user in MongoDB
* ☐ Global error handling
* ☐ Login API
* ☐ Authentication middleware
* ☐ JWT authentication
* ☐ Refresh token handling
* ☐ Logout
* ☐ Role-based authorization
* ☐ Email verification
* ☐ Forgot/reset password
* ☐ Rate limiting
* ☐ Security hardening
* ☐ Google OAuth / OpenID Connect
* ☐ Account linking

## Project Structure

```text
src/
├── config/
│   ├── db.js
│   └── env.js
│
├── controllers/
│   └── auth.controller.js
│
├── middlewares/
│   └── validate.middleware.js
│
├── models/
│   └── user.model.js
│
├── routes/
│   └── auth.routes.js
│
├── validators/
│   └── auth.validator.js
│
├── services/
│   └── auth.service.js
│
├── app.js
└── server.js
```

## Registration API

### Endpoint

```http
POST /auth/register
```

### Request Body

```json
{
  "email": "user@example.com",
  "password": "Password@123",
  "confirmPassword": "Password@123"
}
```

### Registration Flow

```text
Client
  ↓
POST /auth/register
  ↓
Validation Middleware
  ↓
Registration Controller
  ↓
Check Existing Email
  ↓
Hash Password
  ↓
Create User
  ↓
MongoDB
  ↓
Safe Response
```

### Current Validation

* ☑ Email is required
* ☑ Email format validation
* ☑ Email trimming
* ☑ Password minimum length validation
* ☑ Password maximum length validation
* ☑ Confirm password validation
* ☑ Password matching validation

### Security

* ☑ Passwords are hashed using bcrypt
* ☑ Plain-text passwords are not stored
* ☑ Password hashes are not returned in API responses
* ☑ Duplicate email registration is prevented

## Environment Variables

The application uses environment variables for configuration.

Create a `.env` file in the project root and configure the required variables locally.

**Never commit `.env` or any secrets to GitHub.**

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

The server runs on the configured port.

## API Testing

The registration API can be tested using tools such as:

* Postman
* Thunder Client
* Insomnia

### Successful Registration

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": "user-id",
    "email": "user@example.com"
  }
}
```

### Duplicate Email

```json
{
  "success": false,
  "message": "Email is already registered"
}
```

## Development Approach

```text
Learn
  ↓
Design
  ↓
Implement
  ↓
Test
  ↓
Commit
  ↓
Push
```

Each feature is developed and tested before moving to the next feature.

## Project Status

**Current:** Registration API is implemented with validation, duplicate email checking, password hashing, and MongoDB user creation.

**Next:** Global error handling → Login API → Authentication middleware → JWT authentication.

## Authentication Roadmap

* ☑ User registration
* ☑ Input validation
* ☑ Duplicate email checking
* ☑ Password hashing
* ☑ User creation
* ☐ Global error handling
* ☐ Login
* ☐ Password verification
* ☐ JWT authentication
* ☐ Authentication middleware
* ☐ Protected routes
* ☐ Refresh tokens
* ☐ Logout
* ☐ Role-based authorization
* ☐ Email verification
* ☐ Forgot/reset password
* ☐ Rate limiting
* ☐ Security hardening
* ☐ Google OAuth / OpenID Connect
* ☐ Account linking
