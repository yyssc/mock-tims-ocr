var express = require('express');
var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

/* 图像上传接口 */
router.post('/TIMS-Server/postController/uploadFile.action', multipartMiddleware, function(req, res, next) {
  var sk = req.get('secretKey');
  if (sk != 'tims') {
    res.json({
      "return_code": 1,
      "error_msg": "invalid secret key"
    });
    return;
  }

  // req.body.file_param
  console.log(req.body.file_param);
	var fakeFileParam = {
    "bill_pk": "", //单据pk，
		"note_type": "", //发票类型,//0：增值税专用发票
    "doc_name": "", //文件分类名称，//如：a.jpg为上海增票
    "recognize_type": "", //识别方式，//同步/异步
    "data": {
	    "file_pk": "", //文件唯一标识,//nc端定义的文件唯一标识
	    "file_name": "", //文件名称，//文件名称
	    "file_format": "", //文件类型，//如:jpg/bmp/gif
	    "file_size": "", //文件大小，//用于后台做大小校验
	    "file_md5": "", //文件的md5值，//文件防篡改校验
	    "desc": "" //文件备注描述 //用于文件的备注说明
 		}
	};

  // req.body.file
  console.log(req.body.file);
	var fakeFile = {};

	var fakeResult = {
    "return_code": 0, //结果代码,
    "error_msg": "", //错误信息,
    "data": {
      "image_id ": "", //文件唯一id，  //影像系统图片唯一标识 
			"file_pk": "", //文件pk ，//NC系统提供的文件pk（请求报文获取）
			"image_url": "", //文件访问地址 ，//NC系统可以直接访问的url路径
			"invCode": "", //发票代码,
      "invNum": "", //发票编码,
      "invDate": "", //开票日期,
      "taxpayerCode": "", //购方纳税人识别码,
      "sellerTaxpayerCode": "", //销售方识别码,
      "invMny": "", //无税金额,
      "invTaxMny": "", //含税金额,
      "tax": "", //税额,
      "upperTaxMny": "", //大写金额,
      "secret": "", //密文区,
      "vmemo": "", //备注，
      "taxpayername": "", //购方名称,
      "taxpayeraddress": "", //购方地址电话,
      "taxpayeraccount": "", //购方开户行及账号,
      "taxsuppliename": "", //销售方名称,
      "taxsupplieaddr": "", //销售方地址电话,
      "taxsupplieaccount": "", //销售方开户行及账号,
			"noteType": "", //收款人
			"noteType": "", //复合
			"noteType": "" //开票人
    }
  };

	res.json(fakeResult);
});

module.exports = router;
