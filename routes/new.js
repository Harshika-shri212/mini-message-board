const express = require("express");
const router = express.Router();
const { messages } = require("./index");

// GET route for the form
router.get("/", (req, res) => {
  res.render("form", { title: "Add a New Message" });
});

// POST route to add a new message
router.post("/", (req, res) => {
  const { user, text } = req.body;

  if (!user || !text) {
    res.status(400).send("Both fields are required!");
    return;
  }

  messages.push({
    text,
    user,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
