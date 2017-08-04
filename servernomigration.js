var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var knex = require('./db.js');//We want our db.js file to be run every time our server starts up. To ensure this, we simply require it.
var router = express.Router();
//===================================================

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',router);//TO NOT FORGET
//====================================================

//====================================================

router.route('/api/data')
  .get(function(req,res) {
    knex.select('*')
    .from('users')
    .then(function(rows) {
      return res.json({rows})
    })
    .then(function(id) {
      res.json({data : id});
    })
    .catch(function(error) { console.error(error); });
  })
    .post(function(req,res) {

      knex('users').insert({user_name: req.body.name, user_age: req.body.age})
      knex.schema.createTableIfNotExists('users', function(table) {
        table.increments('id');
        table.string('user_name');
        table.string('user_age');
      })
      .then(function(){
          return knex('users').insert({user_name: req.body.name, user_age: req.body.age})
      })
      .then(function(id) {
        res.json({data : id});
      })
      .catch(function(error) { console.error(error); });
    })

//====================================================
var port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`)

