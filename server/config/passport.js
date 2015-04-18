var passport = require('passport'),
  mongoose = require('mongoose'),
  LocalStrategy = require('passport-local').Strategy,
    usermodel=require('../models/User');
var User = mongoose.model('User', usermodel.userSchema);

module.exports = function() {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({regno:username}).exec(function(err, user) {
        if(user && user.authenticate(password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
    }
  ));

  passport.serializeUser(function(user, done) {
    if(user) {
      done(null, user._id);
    }
  });

  passport.deserializeUser(function(id, done) {
    User.findOne({_id:id}).exec(function(err, user) {
      if(user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
  })

}