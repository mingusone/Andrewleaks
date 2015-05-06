var express = require('express');
var router = express.Router();
var db = require('../models');


router.get('/tag', function(req, res, next) {
	
	console.log(req.query.searchTag); 
	


});


module.exports = router;
