//own document import
const { HttpAddContactInfo } = require("./contact.controllers.js");

//third party module import
const express = require("express");

const router = express.Router();

router.post("/", HttpAddContactInfo);

module.exports = router;
