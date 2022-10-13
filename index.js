const express = require('express');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3333;

// code here
app.use('/', async (req, res) => {
    res.json('MediCheckup responding successfully ...')
})

app.listen(port, () => {
    console.log(`App listening on ${port}`);
})