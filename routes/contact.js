const Contact= require('../models/contacts')
const express = require("express");

const router = express.Router();

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
  res.end();
});

router.post("/contact", async (req, res) => {

  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.comment,
  })

  await contact.save()
.then(() => console.log("One entry added"), (err) => console.log(err));

  //  res.redirect('/');
  var details = {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
  };

  console.log(res);

  res.send(
    "<p>Your details have been received as below:- </p><p><strong>Name:</strong> " +
      details.name +
      " </p><p> <strong>Email: </strong>" +
      details.email +
      " </p><p> <strong>Comment: </strong>" +
      details.comment +
      " </p><p><a href =/>Home</a></p>"
  );
  res.end();
});

module.exports= router;
