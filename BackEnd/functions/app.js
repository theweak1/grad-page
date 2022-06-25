const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const contactRouter = require("./routes/Contact/contact.routes.js");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:8080"],
  })
);

app.use(morgan("dev"));
app.use(express.json());

app.use("/contact", contactRouter);

module.exports = app;
