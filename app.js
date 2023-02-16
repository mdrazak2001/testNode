const express = require('express')
const request = require('request')
const path = require('path')
const app = express()
const multer = require('multer')


const storage = multer.diskStorage({
  destination:'./uploads',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})



const upload = multer({ storage: storage })
app.post('/upload', upload.single('img'), (req, res) => {
  console.log(req.file);
  return {} ;
})
  



const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`listening on ${PORT}`))
