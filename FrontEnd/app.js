//core module
const path = require("path");
const PORT = 5000;
//ow document import
const userRoutes = require("./Routes/User/user.routes.js");
const errorController = require("./controllers/error.controller.js");

//third party module
const express = require("express");
const { port } = require("../BackEnd/functions/config.js");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", userRoutes);

app.use(errorController.get404);

try {
  app.listen(PORT);
  console.log("Frontend Running on: " + PORT);
} catch (error) {
  console.log("Error: " + error);
}
