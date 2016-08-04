const should = require('should'); 
const request = require('supertest');

describe('TIMS OCR server', function() {
  var url = 'http://127.0.0.1:3000';

  before(function(done) {
    done();
  });

  describe('图像上传接口', function() {
    it('should return error trying to save duplicate username', function(done) {
      var fileUUID = "img123";
      var file_param = {
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

      request(url)
        .post('/TIMS-Server/postController/uploadFile.action')
        .set('secretKey', 'tims')
        .attach('file', 'test/test.jpg')
        .field('file_param', JSON.stringify(file_param, null, '  '))
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
