/**
 * Created by JAYA on 18-04-2015.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        //db: 'mongodb://localhost/questiondb',
        db: 'mongodb://dbadmin:dbpass@ds061681.mongolab.com:61681/questiondb',
        rootPath: rootPath,
        port: process.env.PORT || 5005
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://dbadmin:dbpass@ds061681.mongolab.com:61681/questiondb',
        port: process.env.PORT || 80
    }
}