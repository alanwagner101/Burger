var express = require("express");

var router = express.Router()

var burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject);
    });

});

router.get("/api/burgers", function (req, res) {
    burger.all(function (data) {
        res.json(data);
    });

});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {

        res.json({ id: result.insertId })
    })
})

module.exports = router;