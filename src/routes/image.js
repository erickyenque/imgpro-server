var compython = require("../compython");
const express = require("express");
const router = express.Router();

router.post("/upload", (req, res) => {
  console.log(req.file);
  let names = [];
  req.files.map((f) => names.push(f.filename));
  console.log(names);
  res.json({
    names: names
  });
});
router.post("/processing", (req, res) => {
  console.log(req.body);
  compython.processImage(req.body.names)  
  res.json("Todo bien todo chido");
})
module.exports = router;
