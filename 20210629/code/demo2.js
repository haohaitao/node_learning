/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-06-29 14:46:48
 * @LastEditTime : 2021-06-29 17:05:21
 * @LastEditors  : pacino
 */
const mongoose = require("mongoose");

// 连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据滞后就会自动被创建出来
mongoose.connect("mongodb://localhost/itCast", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 设计集合结构 （表结构）
// 字段名称就是表结构中的属性名称
// 值
const userScheme = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});

// 将文档结构发布为模型
// 第一个参数：传入一个大写名词单数字符串来表示你的数据库名称
//   mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
//   例如这里的 User 最终会变为 users 集合名词
// 第二个参数：架构 Schema
// 返回值：模型构造函数
const User = mongoose.model("User", userScheme);

// 当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据DIY
const admin = new User({
  username: "张三",
  password: "123456",
  email: "zhangsna@admin.com",
});

// admin.save((err, ret) => {
//   if (err) {
//     console.log("保存失败");
//   } else {
//     console.log("保存成功");
//     console.log("--ret--", ret);
//   }
// });

/**
 *  查询数据
 */
// User.find((err, ret) => {
//   if (err) {
//     console.log("查询失败");
//   } else {
//     console.log("查询成功");
//     console.log("query--", ret);
//   }
// });
// User.findOne(
//   {
//     username: "张三",
//     password: "123456",
//   },
//   (err, ret) => {
//     if (err) {
//       console.log("查询失败");
//     } else {
//       console.log("查询成功");
//     }
//   }
// );

/**
 * 删除数据
 */
// User.deleteMany(
//   {
//     username: "张三",
//   },
//   (err, ret) => {
//     if (err) {
//       console.log("删除失败");
//     } else {
//       console.log("删除成功");
//       console.log(ret);
//     }
//   }
// );

/**
 * 更新数据
 */
User.findByIdAndUpdate(
  "60dac853aed2be31ece245d2",
  { password: "88888888" },
  (err, ret) => {
    if (err) {
      console.log("更新失败");
    } else {
      console.log("更新成功");
    }
  }
);
