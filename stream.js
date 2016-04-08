
const Readable = require('stream').Readable
//const readable = Readable({ objectMode: true })
const readable = Readable()
/**
 * objectMode: true 使用的区别。
 */
readable.push('a')
readable.push('b')
readable.push(' ')
readable.push(null)
readable.on('data', data=> console.log(data))

