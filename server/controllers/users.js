var User = require('../models/user.js')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')


module.exports = {
  signup : (req, res)=>{

    var userCreate = new User({
      name: req.body.name,
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
      email: req.body.email,
      role: req.body.role || 'member'
    })
    userCreate.save((err, user)=>{
      if(err){
        res.send(err)
      } else {
        res.send(user)
      }
    })
  },
  signin: (req, res)=>{
    var user = req.user
    console.log(user);
    if(user.hasOwnProperty('message')){
      res.send(req.user)
    } else {
      var token = jwt.sign({
        username: user.username,
        role: user.role
      }, 'rahasia', (err, token)=>{
        res.send(token)
      })
    }
  }
}
