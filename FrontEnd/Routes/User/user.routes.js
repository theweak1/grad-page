//own document import
const userController = require("./user.controllers");

//third party module import
const express = require("express");

const router = express.Router();

router.get("/", userController.getIndex);
module.exports = router;
