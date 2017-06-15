var express = require('express')
var jwt = require('jsonwebtoken')


module.exports = {
  jwtVerify : function (req, res, next) {
    jwt.verify(req.headers.token, 'rahasia', function(err, decoded) {
      if (decoded.role == 'admin') {
        req.decoded = decoded
        next()
      } else {
        res.send({message: `only admin could create,modify,delete article`})
      }
    });
  }
}
