# BACKEND TASK

This is a TypeScript backend application that serves Chuck Norris jokes. It provides a login route for authentication and a protected joke route that requires a JWT token for access. The app uses TypeORM as the object-relational mapping (ORM) framework and connects to a PostgreSQL database. Additionally, Nodemailer is integrated to send emails with jokes for each GET request.

## Prerequisites

- Node.js
- npm package manager
- PostgreSQL database
- Docker

## Getting Started

To get started with the project, follow the instructions below:

1. Clone this repository to your local machine
2. Change .env.example to just .env and populate it with values
3. Run:

```bash
  npm i
```

4. Open Docker Desktop on your computer and run

```bash
  docker compose up -d
```

5. Start the project with

```bash
  npm run dev
```

6. Check all the routes through the postman by importing postman.json file
7. Write kind response to the author

## API Endpoints

The following API endpoints are available:

- POST /login: Authenticates a user and generates a JWT token.
- GET /jokes: Retrieves a Chuck Norris joke. Requires a valid JWT token in the request headers for authentication.
