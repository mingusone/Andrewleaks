var express = require('express');
var router = express.Router();
var db = require('../models');


/* GET users listing. */
router.get('/:url_name', function(req, res, next) {
	var url_name =req.params.url_name;
	
  db.Page.findOne({url_name: url_name}).then(function(post){
    
  	res.render('show', {doc:post});


  	})

});

module.exports = router;
