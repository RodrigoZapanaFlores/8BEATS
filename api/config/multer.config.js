const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const multer = require('multer');
 

 
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: '8BEATS',
    
  },
});
 
const parser = multer({ storage: storage });
 
module.exports = parser