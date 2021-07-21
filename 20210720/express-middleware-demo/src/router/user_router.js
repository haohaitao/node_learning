/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-07-20 17:43:30
 * @LastEditTime : 2021-07-21 10:40:22
 * @LastEditors  : pacino
 */
const express = require("express");

const router = express.Router();

// 1.第一个场景
router.use((req, res, next) => {
  console.log("log form demo");
  next();
});

function vlaid_login_params(req, res, next) {
  let { name, password } = req.query;
  if (!name || !password) {
    res.json({
      message: "参数校验失败",
    });
  } else {
    next();
  }
}
// 2.路由内部使用
router.get(
  "/login",
  [
    vlaid_login_params,
    /** middleware */
  ],
  (req, res) => {
    res.json({
      msg: "from router demo",
    });
  }
);

module.exports = router;
