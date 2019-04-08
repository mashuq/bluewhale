var express = require('express');
var router = express.Router();
var os = require("os");
const axios = require('axios');
const { closeSync, openSync, readdirSync } = require('fs');
const dataDir = './data/';
const uuidv4 = require('uuid/v4');

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
    const spring = await axios.get('http://spring:8080/data/');
    res.json({
      app: 'node express',
      host: os.hostname(),
      spring: spring,
      number: number(dataDir),
    });
  } catch (e) {
    res.json({
      app: 'node express',
      host: os.hostname(),
      spring: null,
      number: number(dataDir),
    });
  }
});

const touch = filename => closeSync(openSync(dataDir + filename, 'w'));
const number = dir => {
  let files = readdirSync(dir);
  return files.length;
}

module.exports = router;