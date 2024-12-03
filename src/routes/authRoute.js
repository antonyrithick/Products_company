const expess = require("express");
const AuthController = require("../controllers/authController");

const router = expess.Router();

router.post("/login", AuthController.getLogin);

module.exports = router;
