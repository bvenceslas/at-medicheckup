exports.useUssd = (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  let response = "";

  if (text == "") {
    response = `CON Welcome to Medical Checkup.
            Murakaze neza, Kuri Medical Checkup.
            
            Please Choose a language
            1. Kinyarwanda
            2. English`;
  } else if (text == "1") {
    // the user selected Kinyarwanda.
    response = `END Mutwihanganire ntago gukoresha ikinyarwanda birakunda!!`;
  } else if (text == "2") {
    // the user selected English. We start asking questions.
    response = `CON Do you have fever?.
            1. Yes
            2. No`;
  } else if (text == "2*1") {
    // English > has FEVER
    response = `CON Do you have headache?.
            1. Yes
            2. No`;
  } else if (text == "2*2") {
    // English > has no FEVER
    response = `CON Do you have headache?.
            1. Yes
            2. No`;
  } else if (text == "2*1*1") {
    // English > has FEVER > has HEADACHE
    response = `CON Do you have muscle and joint pain?.
            1. Yes
            2. No`;
  } else if (text == "2*2*1") {
    // English > no FEVER > has HEADACHE
    response = `CON Do you have muscle and joint pain?.
            1. Yes
            2. No`;
  } else if (text == "2*1*1*1") {
    // English > has FEVER > has HEADACHE > has MUSCLE & JOINT PAIN
    response = `CON Do you have Sore throat?.
            1. Yes
            2. No`;
  } else if (text == "2*2*1*1") {
    // English > no FEVER > has HEADACHE > has MUSCLE & JOINT PAIN
    response = `CON Do you have Sore throat?.
            1. Yes
            2. No`;
  } else if (text == "2*1*1*1*1") {
    // English > has FEVER > has HEADACHE > has MUSCLE & JOINT PAIN > has SORE THROAT
    response = `END We are sorry to announce you that, these look like the EBOLA signs and symptoms.
            Please contact 007 for an emergency MEDICAL SUPPORT`;
  } else if (text == "2*2*1*1*1") {
    // English > no FEVER > has HEADACHE > has MUSCLE & JOINT PAIN
    response = `END We are sorry for the body pain, 
            these don't look like the EBOLA signs and symptoms.
            Please contact 911 for a MEDICAL ADVICE`;

    // here you can decide to call the SMS API to send SMS to the user
  }

  // Send the response back to the API
  res.set("Content-Type: text/plain");
  res.send(response);
};
