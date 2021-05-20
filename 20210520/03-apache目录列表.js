/*
 * @Description  : apache目录列表
 * @Author       : pacino
 * @Date         : 2021-05-20 10:36:28
 * @LastEditTime : 2021-05-20 14:54:07
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
  var url = req.url;
  fs.readFile("./template.html", function (err, data) {
    if (err) {
      return res.end("404 not found");
    }
    // 1.如何得到 wwwDir 目录列表中的文件和目录名
    //  fs.readdir
    // 2.如果将得到的文件名和目录名替换到 template.html 中
    //  2.1 在 template.html 中需要替换的位置预留一个特殊的标记
    //  2.2 根据 files 生成㤇的 HTML 内容
    //  模板引擎
    // 只要你做了这两件事儿，那这个问题就解决了
    fs.readdir(wwwDir, function (err, files) {
      if (err) {
        return res.end("can not found dir");
      }
      var content = "";
      files.forEach(function (item) {
        content += `
        <tr>
            <td data-value="${item}/">
                <a class="icon dir" href="/20210519/">${item}/</a></td><td class="detailsColumn" data-value="0">
            </td>
            <td class="detailsColumn" data-value="1621418276">
                2021/5/19 下午5:57:56
            </td>
        </tr>
          `;
      });
      data = data.toString();
      data = data.replace("^_^", content);
      // 使用模板引擎解析替换 data 中的模板字符串
      // 3.发送解析替换过后的相应数据
      res.end(data);
    });
  });
});

// 3. 绑定端口号，启动服务
server.listen(3000, function () {
  console.log("app already running at 3000 port...");
});
