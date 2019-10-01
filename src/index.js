const homepage = require("./homepage.js");
const itempage = require("./itempage.js");


console.log("tere");

window.addEventListener("load", () =>{
homepage.setup();
itempage.setup();
});