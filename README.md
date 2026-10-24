# AniDev TCH

AniDev TCH is a full-stack web application for ANIDEV TECHNOLOGIES, a company connecting global employers with skilled talent from Africa. The repository contains a React website and an Express REST API with MongoDB-backed authentication.

## Project structure

```text
.
├── Backend/       # Express API, MongoDB models, and authentication
└── Frontend/      # React website built with Vite
```

## Tech stack

- **Frontend:** React 19, Vite, React Router, Tailwind CSS, Zustand, Axios
- **Backend:** Node.js, Express 5, Mongoose, MongoDB, JWT

## Prerequisites

- Node.js 20.19+ or 22.12+
- npm
- MongoDB, running locally or available through a MongoDB connection URI

## Getting started

Install and configure the backend first:

```powershell
cd Backend
npm install
Copy-Item .env.example .env
```

Edit `Backend/.env` and set `MONGO_URI` to your MongoDB connection string. Set `JWT_SECRET` to a long, random secret, and set `CLIENT_URL` to the frontend's development origin (by default, `http://localhost:5173`).

Start the API:

```powershell
npm run dev
```

In a second terminal, install and start the frontend:

```powershell
cd Frontend
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

The frontend uses `http://localhost:5000/api/v1` by default for API requests. To use a different API URL, create `Frontend/.env` and set:

```dotenv
VITE_API_URL=http://localhost:5000/api/v1
```

## Available scripts

Run these commands from the relevant `Backend` or `Frontend` directory:

| Directory | Command | Description |
| --- | --- | --- |
| `Frontend` | `npm run dev` | Start the Vite development server |
| `Frontend` | `npm run build` | Create a production build in `Frontend/dist` |
| `Frontend` | `npm run preview` | Preview the production build locally |
| `Frontend` | `npm run lint` | Run Oxlint |
| `Backend` | `npm run dev` | Start the API with Nodemon |
| `Backend` | `npm start` | Start the API |

## API

The API is served under `/api/v1`:

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/v1/health` | Check that the API is running |
| `POST` | `/api/v1/auth/register` | Register a user |
| `POST` | `/api/v1/auth/login` | Authenticate a user |
| `GET` | `/api/v1/auth/me` | Get the authenticated user's profile (requires a bearer token) |

## Notes

- The backend connects to MongoDB before it starts listening for requests.
- Backend environment variables are documented in [`Backend/.env.example`](Backend/.env.example).
- The website includes company information, services, insights, and contact pages. Some routes are currently placeholders.
