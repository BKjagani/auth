import multer from 'multer'

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, 'uploads/' )
    },
    filename : function(req, file, cb){
        const fileName = Date.now() + '-' + file.originalname
        cb(null, fileName)
    }
})

const upload = multer({storage : storage})

export default upload.single('image');

// module.exports = upload.single('image');