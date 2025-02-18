const db = require("../models");
const User = db.user;

exports.findAllUser = (req, res) => {
  //res.send("Find");
  try {
    User.findAll({
      order: [["id", "DESC"]], // Order by ID in descending order
    })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.json({ message: error.message });
      });
  } catch (error) {
    console.log(error);
  }
};

exports.createUser = (req, res) => {
  try {
    //........//
    if (!req.body.name) {
      res.status(400).json({ message: "Not empty!" });
      return;
    }
    const newUser = {
      name: req.body.name,
    };
    User.create(newUser)
      .then((data) => {
        res.status(200).json({ message: "User created." });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
    //.........//
  } catch (error) {
    console.log(error.message);
  }
};

exports.findUserById = (req, res) => {
  try {
    const id = req.params.id;
    User.findByPk(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(404).json({ message: err.message });
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateUserById = (req, res) => {
  res.send("Update By ID");
};

exports.deleteUserById = (req, res) => {
  res.send("Delete By ID");
};
