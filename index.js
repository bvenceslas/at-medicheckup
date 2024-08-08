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

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
