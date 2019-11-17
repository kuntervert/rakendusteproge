const express = require('express');
const router = express.Router();
const DB = require("./database.js");
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    imgSrc: { type: String, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now},

});

const Item = mongoose.model("Item", itemSchema);

// UUE ASJA LOOMINE //

router.post("/api/items", (req, res) => {
    const props = {
        imgSrc: "google.ee",
        title: "phone red",
        price: 300,
        category: "phones",
    };
    const item1 = new Item(props);
    item1.save(err => {
        if (err) {
            console.log("error", err);
            res.send(500);
            return;
        }
        console.log("Succesful creation!");
        res.send(201);
    });
});

// GET OTSPUNKT TOOTELE //
router.get("/api/items/:itemId", (req, res) => {
    Item.findById(req.params.itemId, function (err, item) {
        if (err) {
            console.log("Error:", err);
            res.status(500).send(err);
            return;
        }
        res.send(item);
    });
});


router.get("/api/items", (req, res) => {
   Item.find({}, function(err, items){
       if(err){
           console.log("Error:", err);
           res.status(500).send(err);
           return;
       }
       res.send(items);
    })
    // res.json(DB.getItems())
});


module.exports = router;