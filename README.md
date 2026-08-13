# Backend Authentication System

A modern authentication backend built with **Node.js, Express.js, MongoDB, Mongoose, Zod, bcrypt, and JWT**.

This project is being developed step by step to understand how modern backend authentication systems are designed, implemented, tested, and secured.

The project currently supports user registration, login, password hashing, JWT-based authentication, protected routes, refresh tokens, refresh-token validation, and access-token renewal.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Zod
- bcrypt
- JSON Web Token (JWT)
- JavaScript (ES Modules)

---

## Features

- User registration
- Request validation using Zod
- Email format and password validation
- Password confirmation validation
- Duplicate email checking
- Password hashing using bcrypt
- Secure user creation
- User login
- Password verification
- JWT access-token generation
- JWT authentication middleware
- Protected profile route
- Refresh-token generation
- Refresh-token hashing
- Refresh-token storage in MongoDB
- Refresh-token verification
- Refresh-token session validation
- Access-token renewal
- Global error handling

---

## Current Progress

- ☑ Express server setup
- ☑ Environment configuration
- ☑ MongoDB connection
- ☑ Mongoose setup
- ☑ User model
- ☑ Git/GitHub setup
- ☑ Authentication routes
- ☑ Authentication controller
- ☑ Authentication service
- ☑ Token service
- ☑ Refresh token service
- ☑ Registration API
- ☑ Request validation with Zod
- ☑ Password confirmation validation
- ☑ Check if email already exists
- ☑ Password hashing
- ☑ Create user in MongoDB
- ☑ Global error handling
- ☑ Login API
- ☑ Password verification
- ☑ JWT access token generation
- ☑ JWT refresh token generation
- ☑ Authentication middleware
- ☑ Protected profile route
- ☑ Refresh token hashing
- ☑ Refresh token storage in MongoDB
- ☑ Refresh token verification
- ☑ Refresh token session validation
- ☑ Generate new access token using refresh token
- ☐ Refresh token rotation
- ☐ Logout
- ☐ Role-based authorization
- ☐ Email verification
- ☐ Forgot/reset password
- ☐ Rate limiting
- ☐ Security hardening
- ☐ Google OAuth / OpenID Connect
- ☐ Account linking

---

# Project Structure

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
│   ├── validate.middleware.js
│   ├── error.middleware.js
│   └── auth.middleware.js
│
├── models/
│   ├── user.model.js
│   └── refreshToken.model.js
│
├── routes/
│   └── auth.routes.js
│
├── validators/
│   └── auth.validator.js
│
├── services/
│   ├── auth.service.js
│   ├── token.service.js
│   └── refreshToken.service.js
│
├── app.js
└── server.js