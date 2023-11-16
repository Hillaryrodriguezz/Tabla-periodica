const express = require("express");
const router = express.Router();

const numbers = [1,2,3,4,5,6,7,8];

router.get("/", function(req,res,next){
    res.render("home",{layout: false, numbers: numbers});
});

module.exports = router;