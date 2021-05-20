/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-05-18 17:33:50
 * @LastEditTime : 2021-05-19 11:00:24
 * @LastEditors  : pacino
 */

// fs 文件操作模块
// http 网络服务构建模块
// os 操作系统信息模块
// path 路径处理模块

var http = require("http");
var fs = require("fs");
var server = http.createServer();

server.on("request", function (req, res) {
  // index.html
  var url = req.url;

  if (url === "/") {
    // 我们要发送的还是在文件中的内容
    fs.readFile("./resource/index.html", function (err, data) {
      if (err) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end("文件读取失败，请稍后重试");
      } else {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(data);
      }
    });
  } else if (url === "/a") {
    fs.readFile("./resource/ab2.png", function (err, data) {
      if (err) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end("文件读取失败，请稍后重试");
      } else {
        // 图片不需要指定编码，常说的编码一般指的是字符编码
        res.setHeader("Content-Type", "image/png;");
        res.end(data);
      }
    });
  }
});

server.listen(3000, function (err, data) {
  console.log("server running at 3000 ");
});
