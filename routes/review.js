const Contact = require("../models/contacts");
const express = require("express");
const router = express.Router();
router.get("/review", async (req, res) => {
  await Contact.find({})
    .then((result) => {
      // res.send(result);
      res.render("review", { title: "Reviews", data: result });
    })
    .catch((err) => console.log("Error occured, " + err));
});
module.exports = router;
