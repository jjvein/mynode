
//解构赋值
//目前该特性仍然处于开发阶段， 所以需要使用命令
// node --harmony_destructuring destructuring.js

var animals = ['🐱 ' , '🐶 ', '🐍 ', '🐘 ', '🐸 '] 

var animalsAge = {sam: 12, passy: 15, lucy: 3, pubby: 7, bobie: 2}

var [sam, ...other] = animals

console.log('First==>', sam, 'Others==>', other)

var {sam: cat1, passy: dog1, lucy: snake1, pubby: elephant1, bobie: qw1} = animalsAge

console.log(cat1, dog1, snake1, elephant1, qw1)


//下面的例子中， 我们甚至可以对函数的参数使用解构赋值操作， 还有需要注意， 由于这里
//还有使用到 rest parameters 的特性， 所以需要执行命令
//node --harmony_destructuring --harmony_rest_parameters  destructuring.js  or
//node --harmony_destructuring --es_staging  destructuring.js
var request = ({url: url = 'github.com', cors: cors = true}, ...otherData) => {
  console.log(`url: ${url}, cors: ${cors}, otherData: ${otherData}`)
}

request({url: 'google.com'}, 'Hell', 'Word')
