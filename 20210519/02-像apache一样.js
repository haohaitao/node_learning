/*
 * @Description  : 初步实现apache功能
 * @Author       : pacino
 * @Date         : 2021-05-19 14:30:13
 * @LastEditTime : 2021-05-19 15:46:12
 * @LastEditors  : pacino
 */

var http = require("http");

var fs = require("fs");
// 1.创建server
var server = http.createServer();

// 2.监听 server 的 request 请求事件，设置请求处理函数
//  请求
//  处理
//  响应
// 一个请求对应一个响应，如果一个请求的过程中，已经结束响应了，则不能重复发送响应
// 没有请求就没有响应
// 使用过的 apache 服务器软件，默认有
// 127.0.0.1:80/a.txt
// 127.0.0.1:80/index.html
// 127.0.0.1:80/apple/login.html

var wwwDir = "D:/all_projects/20210519/app/www";
server.on("request", function (req, res) {
  var filePath = "/index.html";
  var url = req.url;
  if (url !== "/") {
    filePath = url;
  }
  console.log("--333---", wwwDir + filePath);
  fs.readFile(wwwDir + filePath, function (err, data) {
    if (err) {
      res.setHeader("Content-Type", "text/plain; charset=utf-8;");
      return res.end("没有找到资源！");
    } else {
      res.end(data);
    }
  });
});

// 3. 绑定端口号，启动服务
server.listen(3000, function () {
  console.log("app already running at 3000 port...");
});
