const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, (err, dbClient) => {
  if (err) return console.log(err);
  console.log('Connection is okay');

  const database = dbClient.db('eductech-equipment-node');

  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });               
});