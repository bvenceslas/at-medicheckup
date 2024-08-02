const express = require("express");
const router = express.Router();

router.get("/test", async (req, res) => {
  return res
    .status(200)
    .json({ msg: "Medical CheckUp API is working properly ..." });
});

module.exports = router;
