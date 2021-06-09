/*
 * @Description  : 路由文件
 * @Author       : pacino
 * @Date         : 2021-06-09 14:42:44
 * @LastEditTime : 2021-06-09 17:41:32
 * @LastEditors  : pacino
 */
/**
 *  路由模块
 *  职责：
 *      处理路由
 *      根据不同的请求方法+请求路径设置具体的请求处理函数
 */
var Studnet = require("./studnet");

// Express 提供了一种更好的方式
// 专门用来包装路由

var express = require("express");

// 1/创建一个路由容器
var router = express.Router();

// 2/把路由都挂在到 router 路由容器中

router.get("/", function (re, res) {
  res.send("index page");
});

router.get("/students", function (req, res) {
  // readFile 的第二个参数是可选的，传入 utf8 就是告诉它把读取到的文件直接按照 utf8 编码
  // 文件中读取到的数据一定是字符串

  Studnet.find(function (err, students) {
    // console.log("---students---", students);
    if (err) {
      return res.status(500).send("Server error");
    }
    res.render("index.html", {
      fruits: ["苹果", "香蕉", "榴莲", "芒果"],
      students: students,
    });
  });
  //   fs.readFile("./db.json", "utf8", function (err, data) {
  //     var students = JSON.parse(data).studnets;
  //     if (err) {
  //       return res.status(500).send("Server error");
  //     }
  //     res.render("index.html", {
  //       fruits: ["苹果", "香蕉", "榴莲", "芒果"],
  //       students: students,
  //     });
  //   });
});

router.get("/students/edit", function (req, res) {
  res.send("edit edit edit");
});

router.get("/students/new", function (req, res) {
  /**
   * 1.获取表单数据
   * 2.处理
   *    将数据保存到 db.json 文件中用以持久化
   * 3.发送响应
   *    读取，转为对象，对象中添加数据，转为字符串，写入文件
   */
  res.render("new.html");
});

router.post("/students/new", function (req, res) {
  console.log("---req.body---", req.body);
  Studnet.save(req.body, function (err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  });
  //   res.render("new.html");
});
// module.exports = function (app, fs) {
//     app.get("/", function (req, res) {
//     // readFile 的第二个参数是可选的，传入 utf8 就是告诉它把读取到的文件直接按照 utf8 编码
//     // 文件中读取到的数据一定是字符串
//     fs.readFile("./db.json", "utf8", function (err, data) {
//       var students = JSON.parse(data).studnets;
//       if (err) {
//         return res.status(500).send("Server error");
//       }
//       res.render("index.html", {
//         fruits: ["苹果", "香蕉", "榴莲", "芒果"],
//         students: students,
//       });
//       console.log(JSON.parse(data).studnets);
//     });
//   });
// };

// 3/ 把 router 导出
module.exports = router;
