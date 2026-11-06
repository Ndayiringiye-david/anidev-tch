# Backend API

This is the backend service for AniDev TCH, built with Node.js, Express, MongoDB, and JWT-based authentication. It exposes a REST API for user registration, login, profile retrieval, and health checks.

## Overview

The backend is organized as a modular Express application and follows a layered structure:

- `src/app.js` – creates the Express app and applies middleware
- `src/routes/` – API route definitions
- `src/controllers/` – request handlers
- `src/services/` – business logic
- `src/models/` – Mongoose schemas
- `src/middleware/` – authentication and validation middleware
- `src/config/` – environment and database configuration
- `src/utils/` – reusable helper functions and response utilities

## Tech Stack

- Node.js
- Express 5
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS, Helmet, Cookie Parser, Morgan
- dotenv for environment management

## Project Structure

```text
Backend/
├── server.js
├── package.json
├── README.md
├── src/
│   ├── app.js
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── validators/
└── .env
```

## Prerequisites

Before running the backend, make sure you have:

- Node.js 20+ or 22+
- npm
- MongoDB instance or MongoDB Atlas connection string

## Environment Variables

Create a `.env` file in the `Backend` folder with the following variables:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/anidev-tch
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
BCRYPT_SALT_ROUNDS=12
```

### Variable explanations

- `PORT` – the port the API listens on
- `NODE_ENV` – environment mode (`development`, `production`, `test`)
- `MONGO_URI` – MongoDB database connection string
- `JWT_SECRET` – secret used to sign JWT tokens
- `JWT_EXPIRES_IN` – JWT lifetime, for example `7d`
- `CLIENT_URL` – frontend origin allowed by CORS
- `BCRYPT_SALT_ROUNDS` – password hashing strength

## Installation

From the project root:

```bash
cd Backend
npm install
```

## Running the API

### Development mode

```bash
npm run dev
```

This uses `nodemon` to restart the server automatically when files change.

### Production mode

```bash
npm start
```

By default, the backend runs on:

```text
http://localhost:5000
```

## API Endpoints

All endpoints are prefixed with `/api/v1`.

### Health check

- `GET /api/v1/health`

Returns a success message if the API is running.

### Authentication

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `GET /api/v1/auth/me`

### Register

Request body:

```json
{
  "full_name": "Jane Doe",
  "email": "jane@example.com",
  "password": "password123",
  "phone": "+250788123456",
  "country": "Rwanda",
  "role": "student"
}
```

Response includes:

- the created user summary
- a JWT token

### Login

Request body:

```json
{
  "email": "jane@example.com",
  "password": "password123"
}
```

Response includes:

- the authenticated user summary
- a JWT token

### Get current user

- Requires a valid JWT bearer token

```http
Authorization: Bearer <token>
```

Returns the logged-in user's profile.

## Authentication Model

The backend uses a JWT-based auth flow:

1. User registers or logs in.
2. Server validates credentials.
3. A JWT is generated with the user ID.
4. Client sends the token in the `Authorization` header on protected routes.

Passwords are securely hashed with `bcryptjs` before storage.

## Response Format

The API uses a standard JSON response pattern:

```json
{
  "success": true,
  "data": {},
  "message": "Success message",
  "statusCode": 200
}
```

Error responses follow the same pattern with a `success: false` payload.

## Validation and Security

The backend includes:

- input validation for auth requests
- CORS configuration
- Helmet security headers
- JSON payload limits
- JWT-protected route middleware

## Notes

- MongoDB must be running before the server starts.
- The server will fail to start if `MONGO_URI` is missing.
- The project currently focuses on authentication and base API structure; additional feature modules can be added under `src/services`, `src/controllers`, and `src/routes`.

## Useful Commands

```bash
npm install
npm run dev
npm start
```

## Troubleshooting

### Database connection error

Make sure your MongoDB instance is running and that `MONGO_URI` in `.env` is correct.

### JWT errors

Verify that `JWT_SECRET` is set and that the token is sent in the `Authorization` header.

### CORS problems

Check that `CLIENT_URL` matches your frontend development URL, for example:

```env
CLIENT_URL=http://localhost:5173
```
