const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3333;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// add app routes
const ussdRoutes = require("./routes/ussd.routes");

// routes use
app.use("/api", ussdRoutes);

app.post("/ussd", (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  let response = "";

  if (text == "") {
    response = `CON Welcome to MediCheckup.
        Murakaze neza, Kuri MediCheckup.
        
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

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
