/*
var Readable = require('stream').Readable
var rs = new Readable
rs.push('jjvein')
rs.push('Lee')
rs.push('\n')
rs.push(null)
rs.pipe(process.stdout)
*/


var Readable = require('stream').Readable;
var rs = Readable();

var c = 97;
rs._read = function () {
    rs.push(String.fromCharCode(c++));
    if (c > 'z'.charCodeAt(0)) 
        rs.push(null);
};

    rs.pipe(process.stdout);
