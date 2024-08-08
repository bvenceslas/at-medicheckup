const express = require("express");
const router = express.Router();

// test the API
router.get("/test", async (req, res) => {
  return await res
    .status(200)
    .json({ msg: "Medical CheckUp API is working properly ..." });
});

// USSD request
router.post("/ussd", (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  let response = "";

  if (text == "") {
    response = `CON Welcome to Medical Checkup.
          Murakaze neza, Kuri Medical Checkup.
          
          Please Choose a language
          1. Kinyarwanda
          2. English`;
  } else if (text == "1") {
    response = `END Mutwihanganire ntago gukoresha ikinyarwanda birakunda!!`;
  } else if (text == "2") {
    response = `CON Do you have fever?.
          1. Yes
          2. No`;
  } else if (text == "2*1") {
    response = `CON Do you have headache?.
          1. Yes
          2. No`;
  } else if (text == "2*2") {
    response = `CON Do you have headache?.
          1. Yes
          2. No`;
  } else if (text == "2*1*1") {
    response = `CON Do you have muscle and joint pain?.
          1. Yes
          2. No`;
  } else if (text == "2*2*1") {
    response = `CON Do you have muscle and joint pain?.
          1. Yes
          2. No`;
  } else if (text == "2*1*1*1") {
    response = `CON Do you have Sore throat?.
          1. Yes
          2. No`;
  } else if (text == "2*2*1*1") {
    response = `CON Do you have Sore throat?.
          1. Yes
          2. No`;
  } else if (text == "2*1*1*1*1") {
    response = `END We are sorry to announce you that, these look like the EBOLA signs and symptoms.
          Please contact 007 for an emergency MEDICAL SUPPORT`;
  } else if (text == "2*2*1*1*1") {
    response = `END We are sorry for the body pain, 
          these don't look like the EBOLA signs and symptoms.
          Please contact 911 for a MEDICAL ADVICE`;
  }

  // Send the response back to the API
  res.set("Content-Type: text/plain");
  res.send(response);
});

module.exports = router;
