var express = require("express");
var app = express();
app.listen(8000, () => {
 console.log("Server running on port 8000");
});
app.use(express.json())
app.post("/url", (req, res, next) => {
 console.log(req.body)
});