module.exports = function(swig) {
  //LINK BELOW(NOT WORKING)
  var page_link = function (doc) {
    var link_name;
    if (typeof doc.title !== "undefined" && doc.title !== "") {
      link_name = doc.title
    } else {
      link_name = "Page "+doc.url_name;
    }
    return "<a href='"+doc.full_route+"'>"+link_name+"</a>";
  };
  page_link.safe = true;

  ///////MARKED BELOW
  var marked = require('marked');
  var markedFilter = function (body) {
    return marked(body);
  };
  markedFilter.safe = true;

  /////EXPORT BELOW
  swig.setFilter('marked', markedFilter);
  swig.setFilter('page_link', page_link);
};