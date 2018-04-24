var mongoose = require('mongoose');

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/TodoApp');

module.exports={mongoose};
