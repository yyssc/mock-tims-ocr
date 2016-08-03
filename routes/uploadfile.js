var express = require('express');
var router = express.Router();

/* 图像上传接口 */
router.post('/TIMS-Server/postController/uploadFile.action', function(req, res, next) {
  var fakeResult = {
    "bill_pk": "单据pk",
		"note_type": "发票类型", //0：增值税专用发票
    "doc_name": "文件分类名称", //如：a.jpg为上海增票
    "recognize_type": "识别方式", //同步/异步
    "data": {
      "file_pk": "文件唯一标识", //nc端定义的文件唯一标识
      "file_name": "文件名称", //文件名称
      "file_format": "文件类型", //如:jpg/bmp/gif
      "file_size": "文件大小", //用于后台做大小校验
      "file_md5": "文件的md5值", //文件防篡改校验
      "desc": "文件备注描述" //用于文件的备注说明
    }
	};
	res.json(fakeResult);
});

module.exports = router;
