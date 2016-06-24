'use strict';
const Twit       = require('twit');
const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const config     = require('./config');
const router     = express.Router();
/**
 * Twitter Oauth sample
 */
const T = new Twit({
  consumer_key:         config.twitter.consumer_key,
  consumer_secret:      config.twitter.consumer_secret,
  access_token:         config.twitter.access_token,
  access_token_secret:  config.twitter.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});
/**
 * Define server listen port
 */
app.set('port', (process.env.PORT || config.server.port));
/**
 * Parser json request server
 */
app.use(bodyParser.json({ extended: true }));
/**
 * Corser allow all origins
 */
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
    res.header("Access-Control-Allow-Headers", "Content-type,Accept");
    return res.status(200).end();
  } else {
    next();
  }
});
/**
 * Endpoint 
 */
app.get('/twet/:word', (req, res, next) => {
  const word = req.params.word;
  return T.get('search/tweets', { q: word, count: 5 }, function(err, data, response) {
    data.searchWord = word;
    res.send(data);
  });
});

app.listen(app.get('port'), (err) => {
  if(!err){
    console.log(`Server listen on port: ${app.get('port')}`);
  }
})
