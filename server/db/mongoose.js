var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongod://localhost:27017/TodoApp');

module.exports = {mongoose}