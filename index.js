const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3333;

// app routes
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cors
app.use(cors());

// ussd routes
const ussdRoutes = require("./routes/ussd.routes");

// routes use
app.use("/api", ussdRoutes);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
