var mongoose = require('mongoose');
// Notice the `mongodb` protocol; Mongo is basically a kind of server,
// which handles database requests and sends responses. It's async!
mongoose.connect('mongodb://localhost/wikistack');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

//Schema part

var pageSchema = new mongoose.Schema({
  title:    String,
  url_name: String,
  owner_id: String,
  body:     String,
  date:     { type: Date, default: Date.now },
  status:   Number,
  tags:     [String]

});

pageSchema.virtual('full_route').get(function (){
  return 'show/'+this.url_name;
});

var userSchema = new mongoose.Schema({
  name:  { first: String, last: String },
  email: String
});

var Page = mongoose.model('Page', pageSchema);
var User = mongoose.model('User', userSchema);



module.exports = {
  Page: Page,
  User: User
};
