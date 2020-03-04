var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/burgers");
});
  
router.get("/burgers", function(req, res) {
    burger.selectAll(function(burgerData) {

        res.render("index", { burger_data: burgerData });
    });
});
  

router.post("/burgers/create", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
      console.log(result);
      res.redirect("/");
    });
});
  

router.put("/burgers/:id", function(req, res) {
    burger.eatBurger(req.params.id, function(result) {
      console.log(result);
      res.sendStatus(200);
    });
});

router.put("/return-burgers/:id", function(req, res) {
    burger.returnBurger(req.params.id, function(result) {
      console.log(result);
      res.sendStatus(200);
    });
});
  
module.exports = router;