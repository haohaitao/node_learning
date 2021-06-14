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
var Student = require("./Student");

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

  Student.find(function (err, students) {
    if (err) {
      return res.status(500).send("Server error");
    }
    res.render("index.html", {
      fruits: ["苹果", "香蕉", "榴莲", "芒果"],
      students: students,
    });
  });
  // Promise改写
  // Student.find().then(students => {
  //   console.log('显示》。。', students)
  //   res.render("index.html", {
  //     fruits: ["苹果", "香蕉", "榴莲", "芒果"],
  //     students: students,
  //   });
  // }).catch(err => {
  //   return res.status(500).send("Server error");
  // })
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
  // 1.在客户端的列表页中处理链接问题，需要有id参数
  // 2.获取要编辑的学生 id
  // 渲染页面
  // res.send("edit edit edit");
  Student.updateById(req.body, function (err) {
    if (err) {
      return res.status(500).send('Server error')
    }
    Student.findById(req.query.id, function (err, student) {
      if (err) {
        return res.status(500).send('Server error')
      }
      res.render("edit.html", {
        student: student
      });
    })
  })
});

// 处理编辑学生
router.post("/students/edit", function (req, res) {
  // 1.在客户端的列表页中处理链接问题，需要有id参数
  // 2.获取要编辑的学生 id
  // 渲染页面
  // res.send("edit edit edit");
  Student.updateById(req.body, function (err) {
    if (err) {
      return res.status(500).send('Server error')
    }
    res.redirect('/students')
  })
});

/**
 * 处理删除学生
 */
router.get('/students/delete', function (req, res) {
  // 1、删除的 id
  // 2、数组变异方法删除
  Student.deleteById(req.query.id, function (err) {
    if (err) {
      return res.status(500).send('Server error')
    }
    res.redirect('/students')
  })
})
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
  Student.save(req.body, function (err) {
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
