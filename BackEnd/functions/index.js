// --- Default libraries ---
const functions = require("firebase-functions");
const { initializeApp } = require("firebase/app");
const config = require("./config.js");
const admin = require("firebase-admin");

// --- Initialize Firebase ---
initializeApp(config.firebaseConfig);
admin.initializeApp(config.adminConfig);
exports.db = admin.firestore();

const app = require("./app.js");

exports.API = functions.https.onRequest(app);
