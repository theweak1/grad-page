const { createContact } = require("../../models/contact.model");

async function HttpAddContactInfo(req, res) {
  const newContact = {
    Name: req.body.fname,
    LastName: req.body.lname,
    email: req.body.email,
    reason: req.body.reason,
  };
  try {
    // let createdContact = await createContact(newContact);
    // while (!createdContact) {
    //   null;
    // }
    return res.status(201).redirect("http://localhost:5000/thanks");
  } catch (error) {
    res.status(500).send({ contact: newContact });
    console.log("Error Contact Controller in HttpAddContactInfo(): ", error);
  }
}

module.exports = { HttpAddContactInfo };
