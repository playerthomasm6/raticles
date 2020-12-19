var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(
  
  {
    usernameField: "Email", 
    passwordField: "Password",
  },
  function(email, password, done) {
    db.User.findOne({
      where: {
        email: email,
      }
    }).then(function(dbUser) {
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, dbUser);
    });
  }
));

passport.serializeUser(function(User, cb) {
  cb(null, User);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;