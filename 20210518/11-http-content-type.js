/*
 * @Description  : 端口号
 * @Author       : pacino
 * @Date         : 2021-05-18 17:08:44
 * @LastEditTime : 2021-05-18 17:31:25
 * @LastEditors  : pacino
 */

// require
// 端口号

var http = require("http");

var server = http.createServer();

server.on("request", function (req, res) {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  console.log("收到请求得地址是", req.url);
  res.end("<a href='#'>hello 世界</a>");
});

server.listen(3000, function () {
  console.log("server is running at port 3000...");
});
