var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {

	 db.Page.find().then(function (docs){

	 		res.render('index', { docs: docs });

	 })
  
});



module.exports = router;
