var express = require('express');
var router = express.Router();
var db = require('../models');


router.get('/submit', function(req, res, next) {

var tag= req.query.searchTag;

	 db.Page.find({tags: {$in:[tag] } } ).then(function (docs){
	 	console.log(tag);
    console.log(docs);
	 	res.render('tag', { docs: docs });

	 })
  
});



module.exports = router;
