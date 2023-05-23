const express = require("express");

const router = express.Router();

router .get("/", (req, res) => {
    res.render("home", { title: "Home Page" });
    res.end();
  });

  module.exports = router;