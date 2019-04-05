var express = require('express');
var router = express.Router();
var os = require("os");
const axios = require('axios');

/* GET home page. */
router.get('/data/', async function (req, res, next) {
  res.json({
    app: 'node express',
    host: os.hostname(),
  });
});

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const spring = await axios.get('http://spring:8080/data/');
    res.json({
      app: 'node express',
      host: os.hostname(),
      spring: spring,
    });
  } catch (e) {
    console.log(e);
    res.json({
      app: 'node express',
      host: os.hostname(),
      spring: null
    });
  }
});

module.exports = router;