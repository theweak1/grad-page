const utility = require("../../Utility/Util");

exports.getIndex = (req, res, next) => {
  if (utility.Today > utility.Deadline) {
    // line below is the correct one
    // if (utility.Today < utility.Deadline) {
    res.render("Grad", {
      docTitle: "Graduation Day",
      path: "/",
      year: utility.currentYear,
    });
  } else {
    res.render("Timer", {
      docTitle: "CountDown to Graduation",
      path: "/",
      year: utility.currentYear,
    });
  }
};
exports.getAbout = (req, res, next) => {
  res.render("about", {
    docTitle: "About Me",
    path: "/about",
    year: utility.currentYear,
  });
};
