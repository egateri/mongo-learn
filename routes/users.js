const Student = require("../models/students");
const express = require("express");
const router = express.Router();
router.get("/users", async (req, res) => {
  await Student.find({})
    .then((result) => {
      // res.send(result);
      res.render("users", { title: "Users Page", data: result });
    })
    .catch((err) => console.log("Error occured, " + err));
});
module.exports = router;
