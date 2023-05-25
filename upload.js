const multer = require('multer');
const path = require('path');


// Set Storage engine
const storage = multer.diskStorage({
    destination: './public/images/',
    filename: (req, file, cb)=>{
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); 
    }
})

// Initialize upload
const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},
    fileFilter: (req,file, cb)=>{
        // Allowed extensions
        let fileType = /jpg|jpeg|png|gif/;
        // check file extension
        let extname = fileType.test(path.extname(file.originalname).toLowerCase());
        // check mime type
        let mimetype = fileType.test(file.mimetype);
        
        if (mimetype && extname){
            return cb(null, true);
        }else{
            cb('Error: Images Only!!')
        }
    }
}).single('image');



module.exports = upload;
// checkFileType(file,cb);
// Check file type
// function checkFileType(file,cb){
//     // Allowed extensions
//     let fileType = /jpg|jpeg|png|gif/;
//     // check file extension
//     let extname = fileType.test(path.extname(file.originalname).toLowerCase());
//     // check mime type
//     let mimetype = fileType.test(file.mimetype);

//     if (mimetype && extname){
//         return cb(null, true);
//     }else{
//         cb('Error: Images Only!!')
//     }
// }