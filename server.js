const express = require('express');
const cookieParser = require('cookie-parser');
const next = require('next');

const connectDB = require('./config/db');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 5040;

const catsAPI = require('./catsapi/index');

app
  .prepare()
  .then(() => {
    const server = express();

    // Body parser
    server.use(express.json());

    // Cookie Parser
    server.use(cookieParser());

    // DB used for storing BofA referrals
    connectDB();

    server.use('/catsapi', catsAPI);

    server.all('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
