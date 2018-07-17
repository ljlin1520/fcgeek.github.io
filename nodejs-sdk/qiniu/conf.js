var fs = require('fs');
var path = require('path');
var os = require('os');

exports.ACCESS_KEY = '<please apply="" your="" access="" key="">';
exports.SECRET_KEY = '<dont send="" your="" secret="" key="" to="" anyone="">';

var pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../', 'package.json')));
var ua = function() {
    return 'QiniuNodejs/' + pkg.version + ' (' + os.type() + '; ' + os.platform() + '; ' + os.arch() + '; )';
}

exports.USER_AGENT = ua();
exports.UP_HOST = 'http://upload.qiniu.com';
exports.RS_HOST = 'http://rs.qbox.me';
exports.RSF_HOST = 'http://rsf.qbox.me';
exports.API_HOST = 'http://api.qiniu.com';
exports.RPC_TIMEOUT = 3600000; // default rpc timeout: one hour
exports.UC_HOST  = 'http://uc.qbox.me'; 
exports.UP_HTTPS_HOST = 'https://up-z1.qbox.me';
exports.SCHEME = 'http'; // 上传使用的协议 
exports.AUTOZONE = true; // 自动获取不同机房空间的上传域名
exports.BUCKET = null ; // 上传空间
exports.EXPIRE = 0;</dont></please>