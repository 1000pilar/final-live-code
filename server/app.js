const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const app = express()
const User = require('./models/user.js')


const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:live-code")
console.log(`Connect To database`);

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, {message: `username or password wrong`}); }
      if (!bcrypt.compareSync(password, (user.password, 10))) { return done(null, {message: `username or password wrong`}); }
      return done(null, user);
    });
  }
));



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.listen(3000)
console.log(`Connect to port 3000`);
