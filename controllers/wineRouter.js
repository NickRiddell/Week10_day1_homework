var express = require('express');
var wineRouter = express.Router();
var wineCellar = require('./../models/wineCellar');
var bodyParser = require('body-parser');
wineRouter.use(bodyParser.urlencoded({ extended: false}));

wineRouter.get('/', function(req, res){
  // INDEX
  res.render('wines/index', {wineCellar: wineCellar});
});

wineRouter.get('/new', function(req, res) {
  // NEW
  res.render("wines/new");
});

wineRouter.post('/', function(req, res) {
  // CREATE
  var newWine = {};
  newWine.grape = req.body.grape;
  newWine.colour = req.body.colour;
  wineCellar.wines.push(newWine);
  res.redirect('wines');
});

wineRouter.get('/:id', function(req, res){
  // SHOW
  res.render('wines/show', {wine: wineCellar.planets[req.params.id-1], wineId: req.params.id});
});

wineRouter.get('/:id/edit', function(req, res) {
  // EDIT
  res.render('wines/', {wine: wineCellar.planets[req.params.id-1], wineId: req.params.id}, 'edit');
});

wineRouter.post('/:id', function(req, res) {
  // UPDATE
  res.send("UPDATE wine route " + wineCellar.wines[req.params.id-1].name);
});

wineRouter.post('/:id', function(req, res) {
  // DELETE
  res.send("DELETE wine " + wineCellar.wines[req.params.id-1].name);
});

module.exports = wineRouter