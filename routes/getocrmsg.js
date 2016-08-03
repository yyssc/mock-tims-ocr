var express = require('express');
var router = express.Router();

/* ocr信息及文件查询接口 */
router.get('/TIMS-Server/postController/getOCRMsg.action', function(req, res, next) {
  var fakeResult = {
    "return_code":'结果代码',
    "error_msg":'错误信息',
    "data": {
      "image_id ":'文件唯一id',  //影像系统图片唯一标识 
      "file_pk":'文件pk',//NC系统提供的文件pk（请求报文获取）
      "image_url":'文件访问地址',//NC系统可以直接访问的url路径
      "invCode":'发票代码',
      "invNum":'发票编码',
      "invDate":'开票日期',
      "taxpayerCode":'购方纳税人识别码',
      "sellerTaxpayerCode":'销售方识别码',
      "invMny":'无税金额',
      "invTaxMny":'含税金额',
      "tax":'税额',
      "upperTaxMny":'大写金额',
      "secret":'密文区',
      "vmemo":'备注',
      "taxpayername":'购方名称',
      "taxpayeraddress":'购方地址电话',
      "taxpayeraccount":'购方开户行及账号',
      "taxsuppliename":'销售方名称',
      "taxsupplieaddr":'销售方地址电话',
      "taxsupplieaccount":'销售方开户行及账号',
      "payee":'收款人',
      "reviewer":'复合',
      "drawer":'开票人'
    }
  };
	res.json(fakeResult);
});

module.exports = router;
