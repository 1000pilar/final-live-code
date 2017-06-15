var Article = require('../models/article.js')


module.export = {
  create: (req, res)=>{
    var createActicle = new Article({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.author_id
    })
  }
}
