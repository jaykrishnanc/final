/**
 * Created by JAYA on 18-04-2015.
 */
var mongoose = require('mongoose');


module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('questiondb db opened');
    })};