const express = require('express')
const app = express()
const path = require("path")
const PORT = process.env.PORT || 3000;
const DB = require("./database.js");
const mongoose = require("mongoose");
require('dotenv').config()


// esimene skeema

var kittySchema = new mongoose.Schema({
  name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

const kitten1 = new Kitten({
  name: "red cat2"
});



const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@epood-v0vxs.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(DB_URL)
    .then(() => {
  console.log("Database access granted!");
  kitten1.save( err =>{
    if(err){
      console.log("an error occured");
    }
    else{
      console.log("success save!")
    }
  })
    })
    .catch( err =>{
      console.log("Access error", err);

});




app.get("/api/items", (req, res) => {
  res.json(DB.getItems())
});

app.get("/api/items/:itemId", (req, res) => {
  res.send(DB.getItem(req.params.itemId));
});

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, "../dist", "index.html")));

app.get('/items/*', (req, res) => res.sendFile(path.resolve(__dirname, "../dist", "index.html")));

app.use(express.static("dist"))

app.listen(PORT, () => {
  console.log("Server started", PORT);
  console.log(`http://localhost:${PORT}`);
});