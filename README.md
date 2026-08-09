# Backend Authentication System

A modern authentication backend built with Node.js, Express.js, MongoDB, and Mongoose.

This project is being developed step by step to understand how production-style authentication systems work.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- JavaScript (ES Modules)

## Current Progress

- [x] Express server setup
- [x] Environment configuration
- [x] MongoDB connection
- [x] Mongoose setup
- [x] User model
- [x] Git/GitHub setup
- [ ] Registration API
- [ ] Input validation
- [ ] Password hashing
- [ ] Login API
- [ ] Authentication middleware
- [ ] JWT authentication
- [ ] Refresh token handling
- [ ] Logout
- [ ] Role-based authorization
- [ ] Email verification
- [ ] Forgot/reset password
- [ ] Rate limiting
- [ ] Google OAuth / OpenID Connect
- [ ] Account linking
- [ ] Security hardening

## Project Structure

```text
src/
├── config/
│   ├── db.js
│   └── env.js
│
├── models/
│   └── user.model.js
│
├── routes/
│   └── health-route.js
│
├── controllers/
├── services/
├── middlewares/
├── validators/
│
├── app.js
└── server.js
