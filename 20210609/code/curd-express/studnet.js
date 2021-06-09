/*
 * @Description  : 数据操作文件模块
 * @Author       : pacino
 * @Date         : 2021-06-09 16:10:49
 * @LastEditTime : 2021-06-09 17:46:46
 * @LastEditors  : pacino
 */
// 职责：操作文件中的数据，只处理数据，不关心业务

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
    fs.wrateFile(dbPath, fileData, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
};

/**
 * 更新学生
 */
exports.update = function () {};

/**
 * 删除学生
 */
