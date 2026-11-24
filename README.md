# AniDev TCH

<div align="center">

![AniDev Technologies](./Frontend/src/assets/HerosectionImage.png)

**Connecting global employers with Africa's skilled, tech-ready talent**

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)

</div>

AniDev TCH is the full-stack web platform for **ANIDEV TECHNOLOGIES**, a Rwanda-based organization connecting international businesses with reliable African talent. The monorepository contains a polished, responsive React website and an Express REST API backed by MongoDB.

## Project Preview

<table>
  <tr>
    <td width="50%">
      <img src="./Frontend/src/assets/HerosectionImage.png" alt="AniDev talent working in a technology environment" />
      <p align="center"><strong>Global talent network</strong></p>
    </td>
    <td width="50%">
      <img src="./Frontend/src/assets/about-left.png" alt="AniDev students collaborating in a workspace" />
      <p align="center"><strong>People-powered innovation</strong></p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="./Frontend/src/assets/why_choose_us.png" alt="AniDev team collaborating at a table" />
      <p align="center"><strong>Collaborative teams</strong></p>
    </td>
    <td width="50%">
      <img src="./Frontend/public/Images/ceo.png" alt="AniDev leadership portrait" />
      <p align="center"><strong>Professional leadership</strong></p>
    </td>
  </tr>
</table>

## Highlights

- Responsive business website built with React 19 and Vite
- English and French interface localization
- Dedicated pages for company information, services, programs, insights, testimonials, applications, and partnerships
- Corporate design system using Tailwind CSS and Lucide icons
- Light and dark theme support
- JWT authentication API with registration and login validation
- Password hashing with bcrypt and protected profile access
- Secure Express configuration using Helmet, CORS, and request-size limits
- MongoDB integration with Mongoose

## Technology Stack

| Area | Technologies |
| --- | --- |
| Frontend | React 19, React Router 7, Vite 8, Tailwind CSS 4, Zustand, Axios |
| Backend | Node.js, Express 5, Mongoose 9, MongoDB |
| Authentication | JSON Web Tokens, bcryptjs |
| Security | Helmet, CORS, express-validator |
| Observability | Morgan HTTP logging |
| Tooling | npm, Nodemon, Oxlint |

## Repository Structure

```text
.
├── Frontend/
│   ├── public/
│   │   └── Images/
│   └── src/
│       ├── api/
│       ├── assets/
│       ├── components/
│       ├── constants/
│       ├── data/
│       ├── hooks/
│       ├── i18n/
│       ├── pages/
│       ├── store/
│       ├── theme/
│       └── utils/
└── Backend/
    ├── server.js
    └── src/
        ├── config/
        ├── controllers/
        ├── middleware/
        ├── models/
        ├── routes/
        ├── services/
        ├── utils/
        └── validators/
```

## Getting Started

### Prerequisites

- Node.js 20.19 or newer
- npm
- A local or hosted MongoDB database

### 1. Configure the backend

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

Use a unique, strong `JWT_SECRET` in every deployed environment.

### 2. Start the API

```powershell
cd Backend
npm install
npm run dev
```

The API starts at `http://localhost:5000` and waits for a successful MongoDB connection.

### 3. Start the frontend

Open a second terminal:

```powershell
cd Frontend
npm install
npm run dev
```

Vite normally serves the website at `http://localhost:5173`.

To use a different API base URL, create `Frontend/.env`:

```dotenv
VITE_API_URL=http://localhost:5000/api/v1
```

Restart Vite after changing frontend environment variables.

## Environment Variables

### Backend

| Variable | Required | Default | Description |
| --- | --- | :---: | --- |
| `PORT` | No | `5000` | HTTP server port |
| `NODE_ENV` | No | `development` | Runtime environment |
| `MONGO_URI` | Yes | None | MongoDB connection string |
| `JWT_SECRET` | Yes | Development fallback | Secret used to sign JWTs |
| `JWT_EXPIRES_IN` | No | `7d` | JWT lifetime |
| `BCRYPT_SALT_ROUNDS` | No | `12` | bcrypt cost factor |
| `CLIENT_URL` | No | `http://localhost:5173` | Allowed frontend origin for CORS |

### Frontend

| Variable | Required | Default | Description |
| --- | --- | :---: | --- |
| `VITE_API_URL` | No | `http://localhost:5000/api/v1` | Base URL for REST API requests |

## Available Scripts

Run commands from the relevant application directory.

| Directory | Command | Purpose |
| --- | --- | --- |
| `Frontend` | `npm run dev` | Start the Vite development server |
| `Frontend` | `npm run build` | Create a production build in `Frontend/dist` |
| `Frontend` | `npm run preview` | Preview the production build locally |
| `Frontend` | `npm run lint` | Run Oxlint |
| `Backend` | `npm run dev` | Start the API with Nodemon |
| `Backend` | `npm start` | Start the API in Node.js |

## Frontend Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/who-we-are` | About AniDev |
| `/why-us` | Why choose AniDev |
| `/testimonials` | Client and talent testimonials |
| `/services` | Services |
| `/programs` | Training programs |
| `/products` | Products overview |
| `/products/devbox` | DevBox |
| `/insights` | News and insights |
| `/contact` | Contact |
| `/apply-now` | Application |
| `/become-a-partner` | Partnership |

> The product routes currently use placeholder pages while their full content is under development.

## API Reference

The API is available under `/api/v1`.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/v1/health` | Verify API availability |
| `POST` | `/api/v1/auth/register` | Create a user account |
| `POST` | `/api/v1/auth/login` | Authenticate a user |
| `GET` | `/api/v1/auth/me` | Return the authenticated user's profile |

Send the access token when calling protected endpoints:

```text
Authorization: Bearer <token>
```

Example health check:

```powershell
curl http://localhost:5000/api/v1/health
```

## Production Build

Build the frontend:

```powershell
cd Frontend
npm run build
```

Deploy `Frontend/dist` to a static hosting provider and set `VITE_API_URL` before building. Deploy the backend separately with production environment variables.

For browser routing to work on static hosts, configure fallback rewrites to `index.html` so routes such as `/who-we-are` and `/services` are handled by React Router.

## Troubleshooting

- **MongoDB connection failure:** Confirm MongoDB is running and `MONGO_URI` is valid.
- **CORS rejection:** Set `CLIENT_URL` to the exact frontend origin, including protocol and port.
- **API connection failure:** Verify `VITE_API_URL` and restart Vite after environment changes.
- **Port already in use:** Change `PORT` or stop the process using the configured port.
- **Frontend route not found after deployment:** Add a single-page application rewrite rule for `index.html`.

## Contributing

1. Create a focused feature or fix branch.
2. Keep frontend and backend changes self-contained.
3. Run `npm run lint` in `Frontend`.
4. Build the frontend with `npm run build`.
5. Test authentication and relevant API workflows.
6. Submit a clear pull request describing the change and validation performed.
