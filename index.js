const express = require("express");
const app = express();
const port = 3000;

const userArray = [
  {
    ID: 1,
    firstName: "Mohammad",
    lastName: "Salman",
  },
  {
    ID: 2,
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    ID: 3,
    firstName: "Michael",
    lastName: "Second",
  },
  {
    ID: 4,
    firstName: "Emily",
    lastName: "fourth",
  },
  {
    ID: 5,
    firstName: "Chris",
    lastName: "Brown",
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to our simple REST API!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// POST METHOD

app.post("/", (req, res) => {
  res.json({
    msg: "This the message from POST ",
  });
});

// app.use(express.json());

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

// POST METHOD
app.post("/", (req, res) => {
  const { firstName, lastName } = req.body;

  res.status(201).json({
    msg: "This the message from POST ",
    firstName,
    lastName,
  });
});
