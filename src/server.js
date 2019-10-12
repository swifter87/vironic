const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("./"));

app.get("/", (req, res) => res.sendFile(__dirname + "dwew"));

var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dima@swifter.co",
    pass: "swifter2580"
  }
});

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.post("/", (req, res) => {
  console.log(req.body.user);

  var mailOptions = {
    from: "Swifter Team",
    to: req.body.user.email,
    subject: "Welcome onboard",
    text: `Hi ${req.body.user.name},

Thanks so much for reaching out to Swifter. We are the destination for full-funnel video, display and performance advertising solutions.
A member of the team will contact you shortly.

Thanks,
Swifter Team`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.end();
});

app.listen(3005, () => {
  console.log(`App running at http://localhost:3005`);
});
