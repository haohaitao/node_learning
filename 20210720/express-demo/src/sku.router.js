/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-07-20 14:08:27
 * @LastEditTime : 2021-07-20 14:09:23
 * @LastEditors  : pacino
 */

const express = require("express");

const router = express.Router();

router.get("/list", (req, res) => {
  res.json({
    list: [
      {
        id: 002,
        name: "王五",
      },
    ],
  });
});

module.exports = router;
