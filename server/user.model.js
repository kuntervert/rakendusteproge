const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    hash: { type: String, required: true },
    createdAt: { type: Date, default: Date.now},

});

//Check if user exists//
userSchema.statics.login = function({email, password}){
    return new Promise( (resolve, reject) =>{
        this.findOne({email}, (err, userDoc)=>{
            if(err) return reject(err);
            if(userDoc === null) return reject("user not found");
            bcrypt.compare(password, userDoc.hash, function(err, result){
                if(err) return reject(err);
                if(!result) return reject("Invalid password");
                resolve({
                    email: userDoc.email,
                    createdAt: userDoc.createdAt,
                    _id: userDoc._id,
                });
            });
        });
    });
 };




//CREATES NEW USER//
userSchema.statics.signup = function({email, password}){
    return new Promise( (resolve, reject) =>{
     bcrypt.hash(password, 7, function(err, hash) {
        if(err) return reject(err);
        const user = new User({email,hash});
        user.save(err =>{
            if(err) return reject(err);
            resolve(user);
        });
     });
    });
 };



const User = mongoose.model("User", userSchema);







module.exports = User;