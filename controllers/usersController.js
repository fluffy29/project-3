exports.createNewUser = (req, res) => {
  const { firstName, lastName } = req.body;

  // add some error handling here
  // alphanumeric only regex
  function isAlphanumeric(str) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(str);
  }

  if (!firstName) {
    return res.status(400).json({ error: "The first name is required!" });
  }
  if (typeof firstName !== "string") {
    return res.status(400).json({ error: "That's a weird name !" });
  }
  if (!isAlphanumeric(firstName)) {
    return res.status(400).json({ error: "That name is not allowed !" });
  }

  // run SQL query here
  db.run(
    "INSERT INTO users (firstName, lastName) VALUES (?, ?)",
    [firstName, lastName],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({ id: this.lastID, firstName });
      }
    }
  );
};

exports.deleteUser = (req, res) => {
  // get the id from the params
  const { id } = req.params;
  // run the query
  db.run("DELETE FROM users WHERE id = ?", [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (this.changes === 0) {
      // if nothing found
      res.status(404).json({ message: "User not found" });
    } else {
      // is successful
      res.status(200).json({ message: "User deleted !" });
    }
  });
};
