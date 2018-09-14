var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

// var upload = multer({ dest: 'uploads/' })
var upload = multer({ storage: storage }).single('uploadImage');


router.post('/', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.send('ocurrio un error')
    }

    res.send('successfull')
    // Everything went fine
  })
})

module.exports = router;
