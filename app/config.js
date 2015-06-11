// MongoDB

// open connection to database db
var mongoose = require('mongoose');
var env = 'mongodb://MongoLab-sv:T7Bz903J6yUJUSErxE5H1gKbJpTp5GMRPvtN9koQ9Vg-@ds036698.mongolab.com:36698/MongoLab-sv' || 'mongodb://localhost/shortlydb'
mongoose.connect(env);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
  console.log('connected');  
});

module.exports = db;
