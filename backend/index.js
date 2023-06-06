const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
require('dotenv').config();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const router = express.Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mouhamedgrissa0@gmail.com",
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

router.post("/", (req, res) => {
  const { email, message, subject } = req.body;

  const mailOptions = {
    from: email,
    to: "mouhamedgrissa0@gmail.com",
    subject: subject,
    text: `Email: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending message");
    } else {
      console.log(`Message sent: ${info.response}`);
      res.send("Message sent successfully");
    }
  });
});

// Add the router to the app
app.use("/email", router);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
