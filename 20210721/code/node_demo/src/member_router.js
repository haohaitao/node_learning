/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-07-21 16:08:40
 * @LastEditTime : 2021-07-21 17:59:36
 * @LastEditors  : pacino
 */
const express = require("express");
const router = express.Router();

router.get("/getMember", (req, res) => {
  res.json({
    message: "getMember 是我",
  });
});

module.exports = router;
