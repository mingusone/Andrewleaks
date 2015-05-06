var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('add_page', { title: 'Express' });
});

router.post('/submit', function(req, res) {
	var models = require('../models/');
	var title = req.body.pageTitle;
	var body = req.body.pageContent;
  var tag = req.body.pageTag.split(' ');

  var generateUrlName = function(name) {
 
  if (typeof name != "undefined" && name !== "") {
    // Removes all non-alphanumeric characters from name
    // And make spaces underscore
    return name.replace(/\s/ig, '_').replace(/\W/ig,'');
  } else {
    // Generates random 5 letter string
    return Math.random().toString(36).substring(2,7);
  }
};
  
  var page = new models.Page({ 'title': title, 'body': body, 'url_name': generateUrlName(title), 'tags': tag });
  page.save();
  res.redirect('/');


});
module.exports = router;
