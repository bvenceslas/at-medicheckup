const express = require('express');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3333;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// code here
// app.use('/', async (req, res) => {
//     res.json('MediCheckup responding successfully ...')
// })


app.post('/ussd', (req, res) => {
    // Read the variables sent via POST from our API
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;

    let response = '';

    if (text == '') {
        // This is the first request. Note how we start the response with CON
        response = `CON Welcome to MediCheckup. 
        Please Choose a language
        1. Kinyarwanda
        2. English`;
    } else if (text == '1') {
        // Business logic for first level response
        response = `CON Choose account information you want to view
        1. Account number`;
    } else if (text == '2') {
        // Business logic for first level response
        // This is a terminal request. Note how we start the response with END
        response = `CON Do you have fever?.
        1. Yes
        2. No`;
        // response = `END Your phone number is ${phoneNumber}`;

    } else if (text == '1*1' || text == '1*2') {
        response = `CON Do you have fever?.
        1. Yes
        2. No`;

    }

    else if (text == '2*1' || text == '2*2') {
        // This is a second level response where the user selected 1 in the first instance
        // const accountNumber = 'ACC100101';
        // This is a terminal request. Note how we start the response with END
        // response = `END Your account number is ${accountNumber}`;

        response = `CON Do you have headache?.
        1. Yes
        2. No`;

    } else if (text == '2*1*1' || text == '2*1*2') {

        response = `CON Do you have muscle and joint pain?.
        1. Yes
        2. No`;


    } else if (text == '2*1*1*1' || text == '2*1*1*2') {

        response = `CON Do you have Sore throat?.
        1. Yes
        2. No`;


    } else if (text == '2*1*1*1*1' || text == '2*1*1*1*1') {

        response = `END I am sorry to announce you that, 
        these look like the EBOLA signs and symptoms.
        Please contact this phone number for an emergency physical support`;
    }

    // Send the response back to the API
    res.set('Content-Type: text/plain');
    res.send(response);
});


app.listen(port, () => {
    console.log(`App listening on ${port}`);
})







