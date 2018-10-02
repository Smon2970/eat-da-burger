var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../modals/burger.js");

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get("/burgers", function(req,res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers:data
        };
        console.log(hbsObject);
    res.render("index",hbsObject);
    });
    
});
//not sure if I should use post or put for Insert
router.post("/burgers/add", function (req,res){
    var condition = "id ="+ req.params.id;
    console.log("user input condition"+ condition);

    burger.insertOne( "burger_name",req.body.burger_name, function(){
        res.redirect('/burgers');
    });

});

router.put("/burgers/inhaled/:id", function(req,res){
    var condition = "id = "+ req.params.id;
    // console.log("user input condtion" + condition);

    burger.updateOne({ inhaled: req.body.inhaled }, condition, function(result){
    console.log(res, 'this is our data from the db');
       res.json(result)
    });
});

  module.exports = router;