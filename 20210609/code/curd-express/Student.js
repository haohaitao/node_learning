/*
 * @Description  : 数据操作文件模块
 * @Author       : pacino
 * @Date         : 2021-06-09 16:10:49
 * @LastEditTime : 2021-06-09 17:46:46
 * @LastEditors  : pacino
 */
// 职责：操作文件中的数据，只处理数据，不关心业务
// 封装异步 API

var fs = require("fs");
var dbPath = "./db.json";

/**
 * 获取所有学生列表
 * callback 中的参数
 *      第一个参数是err
 *          成功是 null
 *          错误是 错误对象
 *      第二个参数是 结果
 *          成功是 数组
 *          错误是 undefined
 * return []
 */
exports.find = function (callback) {
  fs.readFile(dbPath, function (err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, JSON.parse(data.toString()).students);
  });
};
// Pomise改写
// exports.find = function () {
//   return new Promise((resolve, reject) => {
//     fs.readFile(dbPath, function (err, data) {
//       if (err) {
//         reject(err);
//       }
//       resolve(JSON.parse(data.toString()).students);
//     });
//   })
// };

/**
 * 根据 id 获取学生信息
 * 学生id
 * callback 回调函数
 */
exports.findById = function (id, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    var ret = students.find(function (item) {
      return item.id === parseInt(id)
    })
    callback(null, ret)
  })
}

/**
 * 添加保存学生
 */
exports.save = function (student, callback) {
  fs.readFile(dbPath, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;

    // id 唯一处理
    student.id = students[students.length - 1].id + 1;
    students.push(student);
    var fileData = JSON.stringify({
      students: students,
    });
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
};

/**
 * 更新学生列表
 */
exports.updateById = function (student, callback) {
  fs.readFile(dbPath, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students
    var stu = students.find(function (item) {
      return item.id === parseInt(student.id)
    })

    // 遍历拷贝对象
    for (var key in student) {
      stu[key] = student[key]
    }

    var fileData = JSON.stringify({
      students: students,
    });
    // 保存到文件中
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  })
};

/**
 * 删除某个学生
 */
exports.deleteById = function (id, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students
    var deleteId = students; findIndex(function (item) {
      return item.id === parseInt(id)
    })

    // 将学生根据下标从数组中删除对应对象
    students.splice(deleteId, 1)
    var fileData = JSON.stringify({
      students: students,
    });
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null)
    });
  })
}