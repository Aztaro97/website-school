const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");


// Configg Dotenv
dotenv.config();


//  Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build")) 

  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}


//  Call Middleware
app.use(express.json({extended: false}));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Port listenning on ${PORT}`);
});