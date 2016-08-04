# mock-tims-ocr

The mock TIMS OCR API server is a fully conforming implementation of the [TIMS API](https://yyssc.github.io/ssc_ocr_api.html) developed by [北京天创征腾信息科技](http://www.tchzt.com/).

## deploy

Example, using pm2 to manage node process.

install pm2

```
sudo npm install pm2 -g
```

get code and deps

```
cd /var/www
git clone https://github.com/yyssc/mock-tims-ocr.git
cd mock-tims-ocr
npm install
```
optionally, you could change server listen port by modify `process.json`

then run it

```
pm2 start process.json
```

## Unittest

```
sudo npm install mocha -g
npm install
DEBUG=mock-tims-ocr:* node ./bin/www
```

in another terminal

```
mocha
```

## use case

- https://github.com/yyssc/tims-ocr-api
