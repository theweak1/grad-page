const { createContact } = require("../../models/contact.model");

async function HttpAddContactInfo(req, res) {
  try {
    const newContact = {
      Name: req.body.name,
      LastName: req.body.lastName,
      email: req.body.email,
      reason: req.body.reason,
    };

    let createdContact = await createContact(newContact);
    return res.status(201).send({ Contact: createdContact });
  } catch (error) {
    res.status(500).send({ error });
    console.log("Error Contact Controller in HttpAddContactInfo(): ", error);
  }
}

module.exports = { HttpAddContactInfo };
