const express = require("express");
const router = express.Router();

// GET Method
app.get("/", (req, res) => {
  res.json({
    msg: "This is the message",
  });
});

// POST Method
app.post("/", (req, res) => {
  const { firstName, lastName } = req.body;
  res.json({
    msg: "This is the message from POST",
    firstName,
    lastName,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// PUT METHOD
app.put("/:id", (req, res) => {
  const { firstName, lastName } = req.body;

  // get the id from the params
  const userId = req.params.id;

  // find the user with this ID, if the user is not found we need to send a 404 status code
  // you need to write the logic here

  // // check what data was sent
  // if (firstName) {

  // }
  res.json({
    msg: "This the message from PUT ",
    userId,
    firstName,
    lastName,
  });
});

// DELETE METHOD
app.delete("/:id", (req, res) => {
  res.json({
    msg: "This the message from DELETE ",
  });
});

module.exports = router;
