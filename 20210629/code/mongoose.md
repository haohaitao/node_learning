<!--
 * @Description  : 
 * @Author       : pacino
 * @Date         : 2021-06-29 14:59:29
 * @LastEditTime : 2021-06-29 17:14:57
 * @LastEditors  : pacino
-->
# 官方指南
  ## 设计Achema 发布 Modal
  ```
  const mongoose = require('mongoose');
  // 1.连接数据库
  // 指定连接的数据库不需要存在，当你插入第一条数据滞后就会自动被创建出来
  mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

  // 将文档结构发布为模型
  // 第一个参数：传入一个大写名词单数字符串来表示你的数据库名称
  //   mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
  //   例如这里的 User 最终会变为 users 集合名词
  // 第二个参数：架构 Schema
  // 返回值：模型构造函数
  const User = mongoose.modelNames("User", userScheme);
  // 当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据DIY
  ```
  ## 查询
  ### 查询所有
  ```
  User.find((err, ret) => {
  if (err) {
    console.log("查询失败");
  } else {
    console.log("查询成功");
    console.log("query--", ret);
  }
});
```
### 按条件查询所有
```
User.find({ username: "张三" }, (err, ret) => {
  if (err) {
    console.log("查询失败");
  } else {
    console.log("查询成功");
    console.log("query--", ret);
  }
});
```
### 按条件查询单个
```
User.findOne(
  {
    username: "张三",
    password: "123456",
  },
  (err, ret) => {
    if (err) {
      console.log("查询失败");
    } else {
      console.log("查询成功");
    }
  }
);
```
## 删除数据
### 根据条件删除所有
```
User.remove({
  username:'张三'
}, (err, ret) => {
  if(err){
    console.log('删除失败')
  }else{
    console.log('删除成功')
    console.log(ret)
  }
})
```
### 根据条件删除一个：

```
  Model.findeOneAndRmobve(condition, [options], [callback])
```
### 根据 id 删除一个：
  ```
    Model.findByIdAndRemove(id, [options], [callback])
  ```
## 更新数据
### 根据条件更新所有：
```
  Model.update(cpmditions, doc, [options], [callback])
```
### 根据指定条件更新一个：
```
  Model.findOneAddUpdate([conditions], [update], [options], [callback])
```
### 根据id更新一个：
```
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
```