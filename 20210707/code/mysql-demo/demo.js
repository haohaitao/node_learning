/*
 * @Description  : 连接mysql
 * @Author       : pacino
 * @Date         : 2021-07-07 10:42:58
 * @LastEditTime : 2021-07-07 11:08:21
 * @LastEditors  : pacino
 */

var mysql = require("mysql");

// 1. 创建数据库连接
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "users",
});

// 2. 连接数据库 打开冰箱门
connection.connect();

// 3. 执行数据操作 把大象放到冰箱
connection.query("SELECT * FROM `USERS` ", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results);
});
// connection.query(
//   `INSERT INTO users VALUES(NULL, "admin", "123456")`,
//   function (error, results, fields) {
//     if (error) throw error;
//     console.log("The solution is: ", results);
//   }
// );

connection.end();
