const Student =require('../models/students');
const express = require("express");
const router = express.Router();
router.get("/register", (req, res) => {
    res.render("register", { title: "Register Page" });
    res.end();
  });

router.post("/register", async (req, res) => {
   const student = new Student({
    roll_no: req.body.roll_no,
    name: req.body.name,
    year: req.body.year,
    // subjects: req.body.subjects
    subjects: ["DBMS","OS","Graph Theory","Internet Programming"]
});
// Add the document to Collections
await student.save()
.then(() => console.log("One entry added"), (err) => console.log(err));

   res.redirect('/');
  });
module.exports = router;