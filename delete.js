const fs = require('fs');

fs.stat('./public/images/image-1685133930599.jpeg', (err, stats) =>{
    console.log(stats);//here we got all information of file in stats variable
 
    if (err) {
        return console.error(err);
    }
 
    fs.unlink('./public/images/image-1685133930599.jpeg',(err) =>{
         if(err) return console.log(err);
         console.log('file deleted successfully');
    });  
 });