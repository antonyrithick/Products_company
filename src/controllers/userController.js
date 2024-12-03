const { where } = require("sequelize");
const errorhandler = require("../middlewares/errorhandler");
const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getOneUser,
  getUserRange,
  getUserCount,
} = require("../services/userService");

exports.getAllUser = async (req, res) => {
  try {
    const users = await getAllUser();
    const userCount = await getUserCount();
    res.status(200).json({ users, userCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: "All fields are required" });
  }
  try {
    const newUser = await createUser({ name, email, password });
    console.log(newUser);
    res.status(201).json({ message: "users created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const update = await updateUser(id, { name, email, password });
    console.log(update);
    res.status(200).json({ message: "successfully updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

exports.RemoveUser = async (req, res) => {
  const { id } = req.params;
  try {
    const remove = await deleteUser(id);
    console.log(remove);
    res.status(200).json({ message: "Removed successfully" });
  } catch (err) {
    res.status(500).json({ message: "internel server error" });
  }
};

exports.getoneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const getoneuser = await getOneUser(id);
    console.log(getoneuser);
    res
      .status(200)
      .json({ message: "get one user successfully...", getoneuser });
  } catch (err) {
    res.status(500).json({ message: "not found..." });
  }
};
exports.getSpecificUser = async (req, res) => {
  try {
    const getspecificuser = await getUserRange();
    if (getspecificuser.length > 0) {
      res
        .status(200)
        .json({ message: "Users fetched successfully.", getspecificuser });
    } else {
      res
        .status(404)
        .json({ message: "No specific users found in the given range." });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
