
const mongoose = require('mongoose');

const config   = require('./config/db.conf.json');

const host = config.host;
const port = config.port;
const dbName = config.db;

const connectionString = 'mongodb://' + host + ':' + port + '/' + dbName + '';

console.log(connectionString);

const options = {
  db: {
    native_parser: true
  },
  server: {
    auto_reconnect: true,
    poolSize: 5
  }
};

mongoose.connect(connectionString, options, function(err, res) {
  if (err) {
    console.log('[mongoose log] Error connecting to: ', + connectionString + '. ' + err);
    return process.exit(1);
  } else {
    return console.log('[mongoose log] Successfully connected to: ', + connectionString);
  }
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));

db.once('open', function() {
  return console.log('mongoose open success');
});


module.exports = db;
