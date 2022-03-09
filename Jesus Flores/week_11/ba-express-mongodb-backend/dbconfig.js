const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/ba');
const db = mongoose.connection;
db.on('error', (err) => {
  console.log('Connection error', err);
  process.exit(1)
});

module.exports = db