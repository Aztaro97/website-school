const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const sgTransport = require('nodemailer-sendgrid-transport');

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// Configg Dotenv
dotenv.config();

app.post("/api/form", (req, res) => {

    let data = req.body;

  // ////////  NODEMALER CONFIGURATION

  const options = {
    service: "SendGrid",
    port: 465,
    auth: {
      user: "taroshopping97@gmail.com",
      pass: process.env.SENDGRID_API_KEY,
    }
  }

  let Transport = nodemailer.createTransport(sgTransport(options));

  let mailOption = {
    from: data.email,
    to: "abdoulazizsanitaro@gmail.com",
    subject: `Message from ${data.name}`,
    html:`
        <h3>Information</h3>
        <ul>
            <li>
                Nom : ${data.name}
            </li>
            <li>
                Nom : ${data.email}
            </li>
        </ul>
        <br>

        <h3>Message</h3>
        <p> ${data.message} </p>
    `
  };

  Transport.sendMail(mailOption, (error, response) => {
      if (error) {
          res.send(error)
      } else {
          res.send("Success")
      }
  })

  Transport.close();
});

//  Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build")) 

  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}


//  Call Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Port listenning on ${PORT}`);
});