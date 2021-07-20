/*
 * @Description  : 路由文件
 * @Author       : pacino
 * @Date         : 2021-07-20 14:06:44
 * @LastEditTime : 2021-07-20 14:12:08
 * @LastEditors  : pacino
 */
const express = require("express");

const router = express.Router();

router.get("/list", (req, res) => {
  res.json({
    list: [
      {
        id: 001,
        name: "李四",
      },
    ],
  });
});

module.exports = router;
