/*
 * @Description  : application 应用程序
 * @Author       : pacino
 * @Date         : 2021-05-20 16:11:58
 * @LastEditTime : 2021-05-20 17:58:20
 * @LastEditors  : pacino
 */

// 把当前模块所有的依赖项都声明在文件模块上面
// public 整个目录中的资源都允许被访问

var http = require("http");
var fs = require("fs");
var template = require('art-template')
// var url = require('url');
const querystring = require('querystring') // 引用querystring
var components = [
  {
    name:'张三',
    message:'今天下雨',
    dateTime: '2021-05-20'
  },
  {
    name:'张三',
    message:'今天下雨',
    dateTime: '2021-05-20'
  },
  {
    name:'张三',
    message:'今天下雨',
    dateTime: '2021-05-20'
  },
  {
    name:'张三',
    message:'今天下雨',
    dateTime: '2021-05-20'
  },
  {
    name:'张三',
    message:'今天下雨',
    dateTime: '2021-05-20'
  }
]
// 简写
http
  .createServer(function (req, res) {
    var url = req.url
    // url.parse已被弃用
    // var parseObj = url.parse(req.url, true)
    req.query = querystring.parse(req.url.split('?')[1]) // 设置query值，将req的url值进行分割整理
    // var pathname = parseObj.pathname
    if (url === "/") {
      fs.readFile("./views/index.html", function (err, data) {
        if (err) {
          return res.end("404 not found");
        }
        var htmlStr = template.render(data.toString(),{
          components: components
        })
        res.end(htmlStr);
      });
    }else if(url.indexOf('/pinglun') === 0){
      // res.end(JSON.stringify(parseObj.query))
      // 1.获取表单提交的数据
      // 2.生成日期到数据对象中，然后存储到数组中
      // 3.让用户重定向跳转到首页 /
      var comment = req.query
      console.log('----70---', comment)
      comment.dateTime = new Date().toLocaleString().replace(/:\d{1,2}$/,' '); 
      console.log('----72---', comment)
      components.push(comment)
      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
    }  else if(url === '/post'){
      fs.readFile("./views/post.html", function (err, data) {
        if (err) {
          return res.end("404 not found");
        }
        res.end(data);
      });
    } else if (url.indexOf("/public/") === 0) {
      fs.readFile("." + url, function (err, data) {
        if (err) {
          return res.end("404 not found");
        }
        res.end(data);
      });
    } else {
      res.setHeader("Content-Type", "text/plain;charset=utf-8;");
      fs.readFile("./views/404.html", function (err, data) {
        if (err) {
          return res.end("404 not found");
        }
        res.setHeader("Content-Type", "text/html;charset=utf-8;");
        res.end(data);
      });
    }
  })
  .listen(3000, function () {
    console.log("running...");
  });
