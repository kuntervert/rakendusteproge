const express = require('express')
const app = express()
<<<<<<< HEAD:proov/server.js
const path = require("path");
const port = 3000
=======
const PORT = 3000
>>>>>>> lesson1:server.js

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, "../static", "index.html"));
})

app.use(express.static('../static'));

app.listen(process.env.PORT || PORT, () => {
  console.log("Server started", PORT);
});