const should = require('should'); 
const request = require('supertest');
const cfg = require('./config');

describe('TIMS OCR server', function() {
  var fileUUID = 'img123';

  before(function(done) {
    done();
  });

  describe('文件下载接口', function() {
    it('应该返回密码错误', function(done) {

      request(cfg.url)
        .post(cfg.api.getimage)
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

    it('应该正常下载对应的图片', function(done) {

      request(cfg.url)
        .post(cfg.api.getimage)
        .set('secretKey', cfg.sk)
        .field('file_id', fileUUID)
        .expect('Content-Type', /image\/jpeg/)
        .expect(200) //Status code
        .end(function(err, res) {
          if (err) {
            throw err;
          }
          done();
        });
    });//ti
  });

});
