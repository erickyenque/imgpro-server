const multer = require("multer");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/imgsupload"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + ".jpg");
  },
});

app.use(cors());
app.use(
  multer({
    storage: storage,
    dest: path.join(__dirname, "../public/imgsupload"),
  }).array("image")
);
//Settings
app.set("port", process.env.PORT || 4000);

//Middlewares
app.use(express.json());
//Para exponer archivos estáticos
app.use('/static', express.static('public'));

//Routes
app.use(require("./routes/image"));

//Starting Server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});