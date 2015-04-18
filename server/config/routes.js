var auth = require('./auth'),
  users = require('../controllers/users'),
 // courses = require('../controllers/courses'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function(app) {

  app.get('/api/users',  users.getUsers);//auth.requiresRole('admin'),
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  //app.get('/api/courses', courses.getCourses);



  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout();
    res.end();
  });

  app.get('*', function(req, res) {
    res.send("Under Construction");
  });
}