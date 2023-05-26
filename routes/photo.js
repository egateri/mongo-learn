const express = require('express');
const router = express.Router();
const upload = require('../upload');
const Photo = require('../models/photos');

// Home page router
router.get('/photo', (req,res)=>{
    Photo.find({})
    .then((images)=>{
        res.render('photo', { images:images, msg: req.query.msg});
    })
    .catch((err)=>console.log(err));

    });


// route to handle image upload
router.post('/photo', async (req,res)=>{
    await upload(req, res, (err)=>{
        if (err){
            console.log(err)
            // Redirect to the index page and pass a msg to the template
            res.redirect(`/photo?msg=${err}`);
        }else if(req.file === undefined){
            // Redirect to the index page and pass a msg to the template
            res.redirect('/photo?msg=Error: No file selected!');
        }else{
            // Create a new photo
            let newPhoto = new Photo({
                name: req.file.filename,
                path: 'images/' + req.file.filename,
                size: req.file.size
            })

            // Save newPhoto in the database
            newPhoto.save()

            // Redirect to the index page and pass a msg to the template
            res.redirect('/photo?msg=File uploaded successfully');
        }
    })
})

module.exports = router;

