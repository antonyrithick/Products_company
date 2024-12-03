const express = require("express");
const companyController = require("../controllers/companyController");

const router = express.Router();

router.get("/companylist", companyController.getAllcompanyList);
router.post("/companynew", companyController.createNewcompany);
router.get("/companysector", companyController.getCompaysector);

module.exports = router;
