var debug = require('debug'),
    os = require('os');

//这里要使用enable开启该名称的log监听事件
debug.enable('getIPAddress')

var getIPAddress = function () {
    var ifaces = os.networkInterfaces();
    var ip = '';
    for (var dev in ifaces) {
        ifaces[dev].forEach(function (details) {
            if (ip === '' && details.family === 'IPv4' && !details.internal) {
                ip = details.address;
                return;
            }
        });
    }
    return ip || "127.0.0.1";
}

var l = debug('getIPAddress')

l(getIPAddress())

