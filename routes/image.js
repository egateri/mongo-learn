const express = require('express');
const router = express.Router();
const Photo = require('../models/photos');

router.get('/:id', (req,res)=>{

    Photo.findById({_id:req.params.id})

    .then((image)=>res.render('single_image', {image:image}))

    .catch((error)=>console.log(error));
        
        });

// route to handle put request
router.put('/:id', async (req,res)=>{
    
    await Photo.updateOne({_id: req.params.id}, {$set: {name: req.body.name}},{upsert:true} );

    console.log(req.body.name);
    res.redirect('/');
})
// Delete route
router.delete('/:id', (req,res)=>{
    
    Photo.deleteOne({_id:req.params.id})
        .then(()=> res.send('Success'))
        .catch((error)=>console.log(error));
       
});
module.exports = router;