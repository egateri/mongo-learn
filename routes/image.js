const express = require("express");
const fs = require("fs");
const router = express.Router();
const Photo = require("../models/photos");

router.get("/image/:id", (req, res) => {
  Photo.findById({ _id: req.params.id })

    .then((image) => {
      console.log(image);
      res.render("single_image", { image: image });
    })

    .catch((error) => console.log(error));
});

// route to handle put request
router.put("/image/:id", async (req, res) => {
  await Photo.updateOne(
    { _id: req.params.id },
    { $set: { name: req.body.name } },
    { upsert: true }
  );

  console.log(req.body.name);
  res.redirect("/");
});

// Delete route
router.delete("/image/:id", (req, res) => {
  Photo.findById({ _id: req.params.id })
    .then((photo) => {
      console.log("Photo :" + photo);
      console.log("Id :" + photo._id);
      console.log("Path :" + photo.path);
      console.log("size :" + photo.size);
      console.log("date :" + photo.date);
      var url = "./public/" + photo.path;
      console.log("URL:" + url);

      fs.stat(url, (err, stats) => {
        console.log(stats); //here we got all information of file in stats variable

        if (err) {
          return console.error(err);
        }

        fs.unlink(url, (err) => {
          if (err) return console.log(err);
          console.log("Image File deleted successfully");
          
        });
        Photo.deleteOne({ _id: req.params.id })
        .then(() => {
          console.log("Database record deleted successfully");
          res.redirect(303,'/photo');
        })
        .catch((error) => console.log(error));

      });
    })
    .catch((error) => console.log(error));
});
module.exports = router;
