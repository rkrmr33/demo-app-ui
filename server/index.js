const express = require('express');
const winston = require('winston');
const handlebars = require('handlebars');
const expressWinston = require('express-winston');
const fs = require('fs/promises');
const path = require('path');

const packagejson = require('../package.json');

const port = parseInt(process.env.PORT, 10) || 3000;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'demo-app-ui' },
  transports: [new winston.transports.Console()],
});

const app = express();

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console(),
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json(),
  ),
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}}',
  expressFormat: false,
  colorize: false,
  ignoreRoute: () => false,
}));

app.use('/static', express.static(path.resolve(__dirname, '..', 'static')));

app.get('/', async (req, res) => {
  const tpl = handlebars.compile(await fs.readFile(path.resolve(__dirname, '..', 'views', 'index.html'), { encoding: 'utf-8' }));

  res.status(200).send(tpl({
    host: process.env.ENV === 'production' ? '' : 'localhost:8080',
    version: packagejson.version,
  }));
});

app.get('/healthz', (req, res) => {
  res.status(200).send('ok');
});

app.get('/readyz', (req, res) => {
  res.status(200).send('ok');
});

app.listen(port, () => {
  logger.info(`app listening on port: ${port}`);
});
