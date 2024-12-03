const { loginOneUser } = require("../services/userService");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt");
require("dotenv").config();

exports.getLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await loginOneUser(email);
    console.log(user);

    if (password != user.password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const token = generateToken(user.id);

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
