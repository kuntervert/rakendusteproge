const express = require("express");
const router = express.Router();
//const DB = require("./database.js");
const mongoose = require("mongoose");
const User = require("./user.model.js");

// get all users


router.get("/api/users", (req, res) =>{
    User.find({}, (err, docs) =>{
       if (err) return handleError(err, res);
       res.status(200).json(docs);     
    });
});

router.post("/api/users/login", (req, res) =>{
    User.findOne({email: req.body.email},(err, doc)=>{
        if(err) return handleError(err, res);
        res.send(doc);
    } );
});


//create user (signup)

router.post("/api/users/signup", (req, res) =>{
    const user = new User(req.body);
    user.save((err) =>{
        if(err) return handleError(err, res);
        console.log("Successfully added user");
        res.status(200).json(user);
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