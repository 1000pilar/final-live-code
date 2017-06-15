var User = require('../models/user.js')

module.exports = {
  signup : (req, res)=>{
    var userCreate = new User({
      name: req.body.name,
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
      email: req.body.email
    })
    userCreate.save((err, user)=>{
      if(err){
        res.send(err)
      } else {
        res.send(user)
      }
    })
  }
}
