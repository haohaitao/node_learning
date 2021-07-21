/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-07-20 14:20:09
 * @LastEditTime : 2021-07-21 14:40:32
 * @LastEditors  : pacino
 */
const express = require("express");

const app = express();

app.get("/demo", (req, res) => {
  throw new Error("测试功能异常");
  // const { message } = req.query;
  //   res.json({
  //     message,
  //   });
});

function demo_middleware(req, res, next) {
  try {
    // mysql操作
  } catch (error) {
    next(error);
  }
}

// 异常处理中间件
function error_handler_middleware(err, req, res, next) {
  const { message } = err;
  console.log("---msg---", message);
  if (err) {
    res.status(500).json({
      msg: message || "服务器异常",
    });
  } else {
    // TODO
  }
}

// 404中间件
function not_found_handler(req, res, next) {
  res.json({
    msessage: "api不存在",
  });
}

app.use(error_handler_middleware);

app.use(not_found_handler);

app.listen(3003, () => {
  console.log("服务启动成功");
});
