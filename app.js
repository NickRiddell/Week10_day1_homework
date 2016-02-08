var express = require('express');
var app = express();

var wineCellar = require('./models/wineCellar.js');
var wineRouter = require('./controllers/wineRouter.js')

var expressLayouts = require('express-ejs-layouts');

//Application Settings
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use("/wines", wineRouter); 
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
  res.render('index', {welcome: "Welcome to the Wine Cellar"});
});


app.listen('3000', function() {
  console.log('Running on port 3000')
})