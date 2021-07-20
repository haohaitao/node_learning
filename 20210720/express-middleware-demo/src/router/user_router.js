/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-07-20 17:43:30
 * @LastEditTime : 2021-07-20 17:51:24
 * @LastEditors  : pacino
 */
const express = require("express");

const router = express.Router();

router.get("/demo", (req, res) => {
  res.json({
    msg: "from router demo",
  });
});

module.exports = router;
