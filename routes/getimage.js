const express = require('express');
const router = express.Router();
const path = require('path');
const multipart = require('connect-multiparty');

var multipartMiddleware = multipart();

/* 文件下载接口 */
router.post('/TIMS-Server/cMImageController/getImage.action', multipartMiddleware, function(req, res, next) {

  var sk = req.get('secretKey');
  if (sk != 'tims') {
	  res.type('application/json');
    res.json({
      "return_code": 1,
      "error_msg": "invalid secret key"
    });
    return;
  }

  // request field:
  // - req.body.file_id {String}
  
  console.log(req.body);

  // get unique file id
  var fileUUID = req.body.file_id;
  if (!fileUUID) {
    console.log('file uuid not found!');
	  res.type('application/json');
    res.json({
      "return_code": 2,
      "error_msg": "cant find data.file_pk field."
    });
    return;
  }

  res.sendFile(path.join(__dirname, '../test/test.jpg'));
});

module.exports = router;
