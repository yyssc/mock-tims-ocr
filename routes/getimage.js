var express = require('express');
var router = express.Router();

/* 文件下载接口 */
router.post('/TIMS-Server/postController/uploadFile.action', function(req, res, next) {
  var fakeResult = {
    "path": "/tmp/xxdebug"
  };
	res.json(fakeResult);
});

module.exports = router;
