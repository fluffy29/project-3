const express = require("express");
const router = express.Router();
const { checkApiKey } = require("../middleware/checkApiKey");
const {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersControllers");

// GET METHOD
router.get("/users", checkApiKey, getAllUsers);

// POST METHOD
router.post("/users", checkApiKey, createNewUser);

// PUT METHOD
router.put("/users/:id", checkApiKey, updateUser);

// DELETE METHOD
router.delete("/users/:id", checkApiKey, deleteUser);

module.exports = router;
