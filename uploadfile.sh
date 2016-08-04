#!/bin/bash

#{
#    "bill_pk": "", //单据pk，
#		 "note_type": "", //发票类型,//0：增值税专用发票
#    "doc_name": "", //文件分类名称，//如：a.jpg为上海增票
#    "recognize_type": "", //识别方式，//同步/异步
#    "data": {
#	    "file_pk": "", //文件唯一标识,//nc端定义的文件唯一标识
#	    "file_name": "", //文件名称，//文件名称
#	    "file_format": "", //文件类型，//如:jpg/bmp/gif
#	    "file_size": "", //文件大小，//用于后台做大小校验
#	    "file_md5": "", //文件的md5值，//文件防篡改校验
#	    "desc": "" //文件备注描述 //用于文件的备注说明
# 		}
#}

json='
{
  "bill_pk": "123",
	"note_type": 0,
  "doc_name": "test.jpg为上海增票",
  "recognize_type": "同步",
  "data": {
    "file_pk": "img123",
    "file_name": "test.jpg",
    "file_format": "jpg",
    "file_size": "`stat --printf="%s"`",
    "file_md5": "`($(md5sum test.jpg))`",
    "desc": "a test.jpg image"
	}
}'

curl \
  -F "file=test.jpg" \
  -F "file_param=$json" \
  --header "secretKey: tims" \
  http://127.0.0.1:3000/TIMS-Server/postController/uploadFile.action
