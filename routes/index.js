var express = require('express');
var router = express.Router();
var fs=require('fs')

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  fs.readFile('public/index.txt','utf-8', function (e, data) {
    var num=JSON.parse(data)
    num.push({name:req.body.name})
    fs.writeFile('public/index.txt','utf-8', function (e,m) {
      var sum=JSON.parse(m);
      res.send({name:sum})
    })
  })
});

module.exports = router;
