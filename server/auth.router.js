const express = require("express");
const router = express.Router();    
const { check, validationResult } = require("express-validator");
const userController = require("./user.controller.js");
const jwt = require("jsonwebtoken");

const JWT_PRIVATE_KEY="salajaneprivaatnekey";

const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
};


router.post("/verify", (req, res) =>{
    const bearerHeader = req.headers["authorization"];
    if(!bearerHeader) return res.send(400);
    const token = bearerHeader.split(" ")[1];
    if(!token) return res.send(400);
    jwt.verify( token,JWT_PRIVATE_KEY, (err, decoded) => {
        if(err){
            console.log(err);
            return res.status(400).send(err);
        }
        res.status(200).send(decoded);
    });      
});


//(LOGIN) find if user with this email exists 
router.post("/login", userController.login);


//create user (signup)
router.post("/signup",[
    // username must be an email
    check("email")
    .isEmail().normalizeEmail(),
    // password must be at least 5 chars long
    check("password")
    .isLength({ min: 5 }).withMessage("Atleast 5 characters long")
    .matches(/\d/).withMessage("Must contain a number")
    .not().isIn(["123", "password", "parool", "parool1", "password1"]).withMessage("Do not use a common word as the password")
  ], 
  validationMiddleware, 
  userController.signup
  );



module.exports = router;