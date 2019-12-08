const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    imgSrc: { type: String, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now},

});

const Item = mongoose.model("Item", itemSchema);



module.exports = Item;