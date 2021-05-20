// require
// 端口号

var http = require('http')

var server = http.createServer()

// 2.监听request请求时间
server.on('request', function (req, res) {
  // 在服务端默认发送的数据，其实是 utf8 编码的内容
  // 但是浏览器不知道你是 utf8 编码的内容
  // 浏览器在不知道服务器相应内容编码的情况下会按照当前系统的默认编码去解析
  // 中文操作系统默认是 gbk
  // 解决方法就是正确告诉浏览器我给你发送的内容是什么编码
  // 在 http 协议中，Content-Type 就是用来高速对方我给你发送的数据内容是什么类型
  var url = req.url;

  if(url === '/plain'){
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('hello 世界')
  }else if(url === '/html'){
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<p>hello html <a href="">点我</a></p>')
  }else{
    res.end('<p>home</p>')

  }
})

server.listen('3000', function(){
console.log('server is running...')
})