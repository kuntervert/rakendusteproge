const express = require("express");
const router = express.Router();
//const DB = require("./database.js");
const mongoose = require("mongoose");
const User = require("./user.model.js");
const bcrypt = require("bcryptjs");



// get all users
router.get("/api/users", (req, res) =>{
    User.find({}, (err, docs) =>{
       if (err) return handleError(err, res);
       res.status(200).json(docs);     
    });
});



//delete users
router.delete("/api/users", (req, res) =>{
    User.deleteMany({}, (err, docs) =>{
        if(err) return handleError(err, res);
        console.log("Successfully deleted useres");
        res.status(204);
    });
});






function handleError(err, res){
    console.log(err);
    res.status(500);
}






module.exports = router;