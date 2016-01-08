var express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
port = process.env.PORT || 8080;

var postSchema = new mongoose.Schema({
  name: String,
  computer: String,
  date: Date,
});
var Post = mongoose.model('Post', postSchema);

var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.use('/', express.static(__dirname + '/public/'));
app.use(bodyParser.urlencoded({
  extended: 'true'
}));

app.get('/', function(req, res) {
  res.render('index.jade')
});
app.post('/api/add', function(req, res) {

});
app.get('/api/leaderboard', function(req, res) {

});
app.get('/api/losers', function(req, res) {

});
app.get('/api/recent', function(req, res) {

});


app.listen(port, function() {
  console.log('Listening on port ' +  port);
});
