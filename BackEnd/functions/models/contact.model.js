const { db } = require("../index.js");

async function createContact({ Name, LastName, email, reason }) {
  try {
    const newContact = {
      Name,
      LastName,
      email,
      reason,
    };
    await db.collection("Contacts").add(newContact);
    return newContact;
  } catch (error) {
    console.log("Error in Contact Model: " + error);
    throw Error(error);
  }
}

module.exports = { createContact };
