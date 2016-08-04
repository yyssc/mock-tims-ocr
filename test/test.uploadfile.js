const should = require('should'); 
const request = require('supertest');
const cfg = require('./config');

describe('TIMS OCR server', function() {
  // -F "file=@..."
  var filePath = 'test/test.jpg';

  // -F "file_param=..."
  var fileUUID = "img123";
  var fileParam = {
    "bill_pk": "123",
  	"note_type": 0,
    "doc_name": "test.jpg为上海增票",
    "recognize_type": "同步",
    "data": {
      "file_pk": fileUUID,
      "file_name": "test.jpg",
      "file_format": "jpg",
      "file_size": "", // stat --printf="%s" test.jpg
      "file_md5": "", // md5=($(md5sum test.jpg));echo $md5
      "desc": "a test.jpg image"
  	}
  };
  var fileParamStr = JSON.stringify(fileParam);

  before(function(done) {
    done();
  });

  describe('图像上传接口', function() {
    it('应该返回密码错误', function(done) {

      request(cfg.url)
        .post(cfg.api.uploadfile)
        .set('secretKey', cfg.sk_wrong)
        .attach('file', filePath)
        .field('file_param', fileParamStr)
        .expect('Content-Type', /json/)
        .expect(200) //Status code
        .end(function(err, res) {
          if (err) {
            throw err;
          }
          res.body.should.have.property('return_code');
          res.body.return_code.should.equal(1);
          console.log(res.body.error_msg);
          done();
        });
    });//ti

    it('应该正常识别上传图片并返回相应JSON字段', function(done) {

      request(cfg.url)
        .post(cfg.api.uploadfile)
        .set('secretKey', cfg.sk)
        .attach('file', filePath)
        .field('file_param', fileParamStr)
        .expect('Content-Type', /json/)
        .expect(200) //Status code
        .end(function(err, res) {
          if (err) {
            throw err;
          }
          res.body.should.have.property('return_code');
          res.body.return_code.should.equal(0);
          res.body.data.image_id.should.equal(fileUUID);
          done();
        });
    });//ti
  });

});
