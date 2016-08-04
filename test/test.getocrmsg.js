const should = require('should'); 
const request = require('supertest');
const cfg = require('./config');

describe('TIMS OCR server', function() {
  var fileUUID = 'img123';

  before(function(done) {
    done();
  });

  describe('ocr信息及文件查询接口', function() {
    it('应该返回密码错误', function(done) {

      request(cfg.url)
        .post(cfg.api.getocrmsg)
        .set('secretKey', cfg.sk_wrong)
        .field('file_id', fileUUID)
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

    it('应该正常返回对应图片id的JSON字段', function(done) {

      request(cfg.url)
        .post(cfg.api.getocrmsg)
        .set('secretKey', cfg.sk)
        .field('file_id', fileUUID)
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
