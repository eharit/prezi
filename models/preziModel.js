var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var preziSchema = new Schema({
    id: String,
    title: String,
    thumbnail: String,
    creator: {
      name: String,
      profileUrl: String
    },
    createdAt: String
});

var Prezis = mongoose.model('Prezis', preziSchema);

module.exports = Prezis;