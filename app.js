const express = require("express");
const path = require("path");
const app = express();

// Import routers
const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");

// Set up the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", indexRouter);
app.use("/new", newRouter);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
