/*
 * @Description  :  入口文件
 * @Author       : pacino
 * @Date         : 2021-07-20 14:20:09
 * @LastEditTime : 2021-07-21 10:11:40
 * @LastEditors  : pacino
 */
const express = require("express");

const userRouter = require("./router/user_router");

const app = express();

function log_midleware(req, res, next) {
  console.log("请求进来了...");
  next();
}

app.use("/user", userRouter);

app.use(log_midleware);

// 加载一个 static 的中间件
app.use(
  express.static("static", {
    extensions: ["html", "html"],
  })
);

// 中间件完整的结构
// 1.是一个函数
// 2.err,req,res,next-->function

function demo_middleware(err, req, res, next) {
  // 1.异常
  // 2,处理下业务功能，然后转交控制权--next
  // 3.响应请求--结束响应-->当做路由的处理函数
}

function valid_name_middleware(req, res, next) {
  let { name } = req.query;
  if (!name || !name.length) {
    res.json({
      message: "缺少name参数",
    });
  } else {
    next();
  }
}

// app.all("*", valid_name_middleware);

// route
app.get("/test", (req, res) => {
  res.json({
    message: "test",
  });
});
app.listen(3001, () => {
  console.log("服务启动成功");
});
