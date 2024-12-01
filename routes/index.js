const express = require("express");
const router = express.Router();

// Sample messages array
const messages = [
  {
    text: "You are great!!",
    user: "harshika",
    added: new Date(),
  },
  {
    text: "lets engineer new stuffs!",
    user: "aaa",
    added: new Date(),
  },
];

// Index route
router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

module.exports = router;
module.exports.messages = messages;
