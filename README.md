# Backend Authentication System

A modern authentication backend built with **Node.js, Express.js, MongoDB, Mongoose, and Zod**.

This project is being developed step by step to understand how modern authentication systems are designed, implemented, and secured.

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Zod
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
* ☑ Registration API
* ☑ Request validation with Zod
* ☑ Password confirmation validation
* ☐ Check if email already exists
* ☐ Password hashing
* ☐ Create user in MongoDB
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

### Current Validation

* ☑ Email is required
* ☑ Email format validation
* ☑ Email trimming
* ☑ Password minimum length validation
* ☑ Password maximum length validation
* ☑ Confirm password validation
* ☑ Password matching validation

## Environment Variables

The application uses environment variables for configuration.

Create a `.env` file in the project root and configure the required variables locally.

**Never commit `.env` or any secrets to GitHub.**

## Installation

```bash
npm install
```

## Run Development Server

```bash
npm run dev
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

## Project Status

**Current:** Registration API with request validation.

**Next:** Check existing email → hash password → create user in MongoDB.
