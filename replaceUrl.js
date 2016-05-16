/**
 * 将其中的一部分参数替换
 */
function replaceUrl(url) {
    var lat = 3.1456777, lng = 120.2123003
    url = url.replace(/lat=[^&]*/gi, 'lat=' + lat)
    url = url.replace(/lng=[^&]*/gi, 'lng=' + lng)
    
    return url
}

var url = 'http://i.meituan.com?lat=555555&lng=444444'
url = replaceUrl(url)
console.log(url)