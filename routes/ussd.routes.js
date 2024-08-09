const express = require("express");
const router = express.Router();

const { useUssd } = require("../controllers/ussd.controller");

// test the API
router.get("/test", async (req, res) => {
  return await res
    .status(200)
    .json({ msg: "Medical CheckUp API is working properly ..." });
});

// USSD request
router.post("/ussd", useUssd);

module.exports = router;
