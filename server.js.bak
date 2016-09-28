
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

var db;

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));


MongoClient
  .connect('mongodb://steph:test@ds033966.mlab.com:33966/letthewookiewin' ,
  (err, database) => {
    if (err) {
      return concole.log(err);
    }
    else {
      db = database;
      app.listen(8080, () => {
        console.log("listening on 8080");
      })
    }
})

app.get('/', (req, res) => {
  var cursor = db.collection('quotes').find().toArray((err, results) => {
    console.log('get');
    console.log(results);
    res.render('index.ejs', {quotes: results});
  })

  //res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) {
      return console.log(err);
    }
    else {
      console.log('saved to database');
      res.redirect('/');
    }
  })
})

app.put('/quotes', (req, res) => {
  console.log("coucou" + req);
  db.collections('quotes').findOneAndUpdate(
    {name: 'Yoda'},
    {$set: {name: req.body.name, quote: req.body.quote}},
    {sort: {_id:-1}, upsert: true},
    (err, result) => {
      if (err) return res.send(err);
      res.send(result);
    })
})


app.delete('/quotes', (req, res) => {
  // Handle delete event here
  console.log("deteting" + req);
})
