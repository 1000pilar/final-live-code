var Article = require('../models/article.js')


module.export = {
  create: (req, res)=>{
    var createActicle = new Article({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.author_id
    })
    createActicle.save((err, data)=>{
      if(err){
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },
  findAll: (req, res)=>{
    Article.find((err, result)=>{
      if (err) {
        res.send(err)
      } else {
        res.send(result)
      }
    })
  },
  findCategory: (req, res)=>{
    Article.find({category: req.params.category}, (err, result)=>{
      if(!err) {
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  update: (req, res)=>{
    Article.findOneAndUpdate({_id: req.params.id}, {$set:{
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.author_id
    }}, {new: true}, (err, data)=>{
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },
  delete: (req, res)=>{
    Article.remove({_id: req.params.id}, (err, data)=>{
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  }
}
