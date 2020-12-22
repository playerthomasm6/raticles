var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(

  {
    usernameField: "Email",
    passwordField: "Password",
  },
  function (Email, Password, done) {
    db.User.findOne({
      where: {
        Email: Email,

      }
    }).then(function (dbUser) {
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

passport.serializeUser(function (User, cb) {
  cb(null, User);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport;