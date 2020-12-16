var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(
  
  {
    usernameField: "email"
  },
  function(email, password, done) {
    db.User.findOne({
      where: {
        Email: Email,
        Username: Username
      }
    }).then(function(dbUser) {
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      else if (!dbUser.validPassword(Password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, dbUser);
    });
  }
));

passport.serializeUser(function(User, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;