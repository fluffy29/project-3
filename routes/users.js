const express = require("express");
const router = express.Router();
const { 
  getAllUsers,
  createNewUsers,
  updateUser,
} = require("../controllers/usersController");


// GET Method
router.get("/users", getAllUsers)

// POST Method
app.post("/users", createNewUsers)

// PUT METHOD
app.put("/users/:id", updateUser)

// DELETE METHOD
app.delete("/users/:id",  )

module.exports = router;
