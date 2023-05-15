# Menu

## Web application for catering

With the help of the  **Menu**, you are able to  manage your cafe or restaurant. The application provides the ability to add various dishes to the page, compose a complete description for them, add an image, after which the users can place their own order. Also a recommendation-panel and a small-chat are also implemented.

## The structure of the app

### User

- Home page
- Product page
- Cart page
- Order page
- User's page
- Chat
- Recommendation panel

### Admin

- Home page
- Product page
- Order page
- User's page
(+tables with all information about products, orders and users)

## Tech

Libraries and technologies, which were used:

- [NestJS](https://duckduckgo.com)
- [Express](https://expressjs.com)
- [Node.js](https://nodejs.org)
- [Nodemailer](https://nodemailer.com)
- [Postgres](https://www.postgresql.org)
- [Typeorm](https://typeorm.io)
- [Uuid](https://www.npmjs.com/package/uuid)
- [TypeScript](https://www.typescriptlang.org)
- [React](https://react.dev)
- [Redux](https://redux.js.org/)
- [Styled-components](https://styled-components.com)
- [Axios](https://axios-http.com)
- [Formik](https://formik.org)
- [Yup](https://github.com/jquense/yup)
- [Material-UI](https://mui.com/)
- [SocketIO](https://socket.io/)

## Installation

Menu requires [Node.js](https://nodejs.org/) v16+ to run.

**Backend:**

```sh
cd backend
create your own database and fill .env file
npm i
npm run migration:run
npm run seed:run
npm run start
```

.env example:

```sh
PORT = 5000
POSTGRES_HOST = localhost
POSTGRES_PORT = 5432
POSTGRES_USER = postgres
POSTGRES_PASSWORD = 1234
POSTGRES_DB = menu
```

**Frontend:**

Admin:

```sh
cd admin
create .env file with the PORT value
npm i
npm run start
```

.env example:

```sh
PORT = 3001
```

Client:

```sh
cd client
npm i
npm run start
```

 ✨ Author: <korenko.artem9@gmail.com>
