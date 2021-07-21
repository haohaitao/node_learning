/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-07-21 16:08:40
 * @LastEditTime : 2021-07-21 17:59:58
 * @LastEditors  : pacino
 */
const express = require("express");
const router = express.Router();

router.get("/getSku", (req, res) => {
  res.json({
    message: "我是sku",
  });
});

module.exports = router;
