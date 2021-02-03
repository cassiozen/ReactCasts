# A glimpse at React Server Components

Server Components is a proposal that might represent the future of how we create React Applications.

Screencast video:
[https://youtu.be/B7W0bAO5Hj4](https://youtu.be/B7W0bAO5Hj4)

# How to setup this Demo

```
npm install
npm start
```

(Or `npm run start:prod` for a production build.)

Then open http://localhost:4000.

The app won't work until you set up the database, as described below.

## DB Setup

This demo uses Postgres. First, follow its [installation link](https://wiki.postgresql.org/wiki/Detailed_installation_guides) for your platform.

The below example will setup the database for this app, assuming that you have a UNIX-like platform:

### Step 1. Create the Database

```
psql postgres

CREATE DATABASE bookstore;
CREATE ROLE bookstoreadmin WITH LOGIN PASSWORD 'password';
ALTER ROLE bookstoreadmin WITH SUPERUSER;
ALTER DATABASE bookstore OWNER TO bookstoreadmin;
\q
```

### Step 2. Run the seed script

Finally, run `npm run seed` to create the table and populate some data.

# Notes about this app

Based on the React Team's [Server component demo](https://github.com/reactjs/server-components-demo). It consists of a few major parts:

- It uses a Webpack plugin (not defined in this repo) that allows us to only include client components in build artifacts
- An Express server that:
  - Serves API endpoints used in the app
  - Renders Server Components into a special format that we can read on the client
- A React app containing Server and Client components used to build React Notes
