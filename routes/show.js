var express = require('express');
var router = express.Router();
var db = require('../models');


router.get('/tag', function(req, res, next) {
	
	console.log(req.query.searchTag); 

	
	
  // db.Page.find({tags: rew}).then(function(post){
  //   console.log(post);
    
  // 	res.send('showTags');


  // 	});
	


});

/* GET users listing. */
router.get('/:url_name', function(req, res, next) {
	var url_name =req.params.url_name;
	
  db.Page.findOne({url_name: url_name}).then(function(post){
    console.log(post);
    
  	res.render('show', {doc:post});


  	});
	


});


module.exports = router;
