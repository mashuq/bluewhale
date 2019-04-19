var express = require('express');
var router = express.Router();
var os = require("os");
const axios = require('axios');
const { closeSync, openSync, readdirSync } = require('fs');
const dataDir = './data/';
const uuidv4 = require('uuid/v4');
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/info.log' })
  ]
});

/* GET home page. */
router.get('/data/', async function (req, res, next) {
  res.json({
    app: 'node express',
    host: os.hostname(),
  });
});

/* GET home page. */
router.get('/', async function (req, res, next) {
  let uuid = uuidv4();
  touch(uuid);
  try {
    const spring = await axios.get('http://spring-service:8080/data/');
    const python = await axios.get('http://externalpython-service:8080/data');
    let response = {
      app: 'node express',
      host: os.hostname(),
      spring: spring.data,
      number: number(dataDir),
      python: python.data,
    };
    logger.info(response);
    res.json(response);    
  } catch (e) {
    logger.error(e);
    let response = {
      app: 'node express',
      host: os.hostname(),
      number: number(dataDir),
    };
    logger.info(response);
    res.json(response);
  }
});

const touch = filename => closeSync(openSync(dataDir + filename, 'w'));
const number = dir => {
  let files = readdirSync(dir);
  return files.length;
}

module.exports = router;