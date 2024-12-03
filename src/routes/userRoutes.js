const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/users", userController.getAllUser);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.RemoveUser);
router.get("/getoneuser/:id", userController.getoneUser);
router.get("/getspecificuser", userController.getSpecificUser);

module.exports = router;
