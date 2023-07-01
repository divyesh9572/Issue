
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/issue_tracker')
  .then(() => {
    console.log('Connected to Database :: MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports = db;