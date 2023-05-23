const Student =require('../db/db-config');
const express = require("express");
const router = express.Router();
router.get("/register", (req, res) => {
    res.render("register", { title: "Register Page" });
    res.end();
  });

router.post("/register", (req, res) => {
   const stud = new Student({
    roll_no: req.body.roll_no,
    name: req.body.name,
    year: req.body.year,
    // subjects: req.body.subjects
    subjects: ["DBMS","OS","Graph Theory","Internet Programming"]
});
// Add the document to Collections
stud.save()
.then(() => console.log("One entry added"), (err) => console.log(err));

   res.end();
  });
module.exports = router;