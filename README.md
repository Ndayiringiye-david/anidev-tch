# AniDev TCH

AniDev TCH is a full-stack website for ANIDEV TECHNOLOGIES, connecting global employers with skilled talent across Africa. This monorepository contains a responsive React frontend and an Express REST API backed by MongoDB.

## Overview

The platform presents company services, programs, partnerships, testimonials, insights, and application opportunities through a multilingual interface.

### Key Features

- Responsive, modern user experience
- English and French localization
- Authentication with registration, login, and protected profile access
- JWT-based API authentication
- Company, services, programs, partnership, and contact content
- MongoDB-backed user and application models
- Helmet, CORS, request validation, structured errors, and HTTP logging

## Technology

| Layer | Technologies |
| --- | --- |
| Frontend | React 19, Vite, React Router, Tailwind CSS, Zustand, Axios |
| Backend | Node.js, Express 5, Mongoose, MongoDB |
| Security | JSON Web Tokens, bcryptjs, Helmet, CORS |
| Tooling | Nodemon, Oxlint |

## Repository Structure

```text
.
├── Backend/
│   ├── server.js
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       ├── services/
│       ├── utils/
│       └── validators/
└── Frontend/
    └── src/
        ├── api/
        ├── components/
        ├── constants/
        ├── data/
        ├── hooks/
        ├── i18n/
        ├── pages/
        ├── store/
        └── utils/
```

## Prerequisites

- Node.js 20.19 or newer
- npm
- A local or hosted MongoDB database

## Local Development

### 1. Configure the API

Create `Backend/.env`:

```dotenv
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/anidev
JWT_SECRET=replace-with-a-long-random-secret
JWT_EXPIRES_IN=7d
BCRYPT_SALT_ROUNDS=12
CLIENT_URL=http://localhost:5173
```

`JWT_SECRET` must be changed for every deployed environment. `MONGO_URI` is required for the backend to start.

### 2. Install and start the backend

```powershell
cd Backend
npm install
npm run dev
```

The API will listen at `http://localhost:5000` by default.

### 3. Install and start the frontend

Open a second terminal:

```powershell
cd Frontend
npm install
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`.

To connect the frontend to a different API, create `Frontend/.env`:

```dotenv
VITE_API_URL=http://localhost:5000/api/v1
```

Restart the Vite development server after changing environment variables.

## Environment Variables

### Backend

| Variable | Required | Default | Description |
| --- | --- | --- | --- |
| `PORT` | No | `5000` | HTTP server port |
| `NODE_ENV` | No | `development` | Runtime environment |
| `MONGO_URI` | Yes | None | MongoDB connection string |
| `JWT_SECRET` | Yes | Development fallback | Secret used to sign JWTs |
| `JWT_EXPIRES_IN` | No | `7d` | JWT lifetime |
| `BCRYPT_SALT_ROUNDS` | No | `12` | bcrypt cost factor |
| `CLIENT_URL` | No | `http://localhost:5173` | Allowed frontend origin for CORS |

### Frontend

| Variable | Required | Default | Description |
| --- | --- | --- | --- |
| `VITE_API_URL` | No | `http://localhost:5000/api/v1` | Base URL for REST API requests |

## Available Scripts

Run each command from the corresponding application directory.

| Directory | Command | Purpose |
| --- | --- | --- |
| `Frontend` | `npm run dev` | Start the Vite development server |
| `Frontend` | `npm run build` | Create a production build in `Frontend/dist` |
| `Frontend` | `npm run preview` | Preview the production build locally |
| `Frontend` | `npm run lint` | Run Oxlint |
| `Backend` | `npm run dev` | Start the API with Nodemon |
| `Backend` | `npm start` | Start the API in normal Node.js mode |

## API Reference

The API is available under `/api/v1`.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/v1/health` | Verify API availability |
| `POST` | `/api/v1/auth/register` | Create a user account |
| `POST` | `/api/v1/auth/login` | Authenticate a user |
| `GET` | `/api/v1/auth/me` | Return the authenticated user's profile |

Requests to `/api/v1/auth/me` require a bearer token:

```text
Authorization: Bearer <token>
```

The backend must establish a MongoDB connection before it begins accepting requests.

## Frontend Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/who-we-are` | About the organization |
| `/why-us` | Why choose AniDev |
| `/testimonials` | Testimonials |
| `/services` | Services |
| `/programs` | Training programs |
| `/products` | Products overview placeholder |
| `/products/devbox` | DevBox placeholder |
| `/insights` | Insights |
| `/contact` | Contact |
| `/apply-now` | Application |
| `/become-a-partner` | Partnership |

## Production Build

Build the frontend:

```powershell
cd Frontend
npm run build
```

Deploy the contents of `Frontend/dist` to a static hosting provider and configure `VITE_API_URL` before building. Deploy the backend separately and configure all required environment variables with production values.

For browser routing to work on static hosts, configure them to rewrite unknown paths to `index.html`.

## Troubleshooting

- **MongoDB connection failure:** Confirm that MongoDB is running and that `MONGO_URI` is valid.
- **CORS rejection:** Set `CLIENT_URL` to the exact frontend origin, including protocol and port.
- **API connection failure:** Confirm `VITE_API_URL` points to the running API and restart Vite after environment changes.
- **Port already in use:** Change `PORT` for the backend or stop the process using the configured port.

## Contributing

1. Create a feature branch.
2. Keep frontend and backend changes focused and self-contained.
3. Run `npm run lint` in `Frontend` and test relevant API workflows.
4. Submit a clear pull request describing the change and its validation.
