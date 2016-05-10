
var argv = require('minimist')(process.argv.slice(2), {
    alias: {
        slient: 's',
        port: 'p',
        hostname: 'h',
        dir: 'd',
        log: 'l'
    },
    string: ['port', 'hostname'],
    boolean: ['slient', 'log'],
    default: {
        port: 8000,
        dir: process.cwd()
    }
})

console.log(argv)