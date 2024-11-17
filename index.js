const express = require("express");
const app = express();

const port = 3000;
const usersRouter = require("./routes/users.js");

// MIDDLEWARE

app.use(express.json());
// users endpoint

app.use("/api/", usersRouter);

// HOME GET METHOD
app.get("/", (req, res) => {
  res.json({
    msg: "welcome to my users API !",
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
