
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

MongoClient
  .connect('mongodb://steph:test@ds033966.mlab.com:33966/letthewookiewin' ,
  (err, database) => {
    console.log('err' + err);
    console.log('database' + database);
  })

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})

app.listen(3000, function() {
  console.log("listening on 3000")
})
