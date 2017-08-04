var express = require('express');
var app = express();
var sqlite3 = require('sqlite3').verbose();
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./Database.db"
  }
});



app.get('/api/data', function(req, res){

    knex.select('*')
    .from('users')
    .then(function(rows) {
      return res.json({rows})
    })
    .then(function(id) {
      console.log('Inserted Account ' + id);
    })
    .catch(function(error) { console.error(error); });
});

app.post('/api/data',function(req,res){
    knex.schema.createTableIfNotExists('users', function(table) {
      table.increments('id');
      table.string('user_name');
      table.string('user_age');
    })
    .then(function(){
        return knex('users').insert({user_name: req.body.name, user_age: req.body.age})
    })

})



app.listen(3000);
console.log("port 3000")

