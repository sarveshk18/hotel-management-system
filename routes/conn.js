var mongoose = require('mongoose'),
    assert = require('assert');


// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
exports.db = mongoose.connection;
