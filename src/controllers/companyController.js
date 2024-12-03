const {
  getCompanyAll,
  CreateCompany,
  getcompanyCount,
  getcompanyBysector,
} = require("../services/companyService");

exports.getAllcompanyList = async (req, res) => {
  try {
    const companyAll = await getCompanyAll();
    const totalcount = await getcompanyCount();
    if (companyAll.length === 0) {
      res.status(404).json({ message: "no company records..." });
    }

    res.status(200).json({ message: "success", companyAll, totalcount });
  } catch (err) {
    res.status(500).json({ message: "not Found..." });
  }
};

exports.createNewcompany = async (req, res) => {
  const {
    compay_id,
    compay_name,
    comapany_email,
    company_sector,
    company_passoword,
  } = req.body;
  try {
    if (
      !compay_id ||
      !compay_name ||
      !comapany_email ||
      !company_sector ||
      !company_passoword
    ) {
      res.status(400).json({ message: "All fields are required" });
    }
    const companyData = await CreateCompany({
      compay_id,
      compay_name,
      comapany_email,
      company_sector,
      company_passoword,
    });
    console.log(companyData);
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "internel server error", err });
  }
};

exports.getCompaysector = async (req, res) => {
  try {
    const compaylistsector = await getcompanyBysector();
    console.log(compaylistsector);
    res.status(200).json({ message: "success", compaylistsector });
  } catch (err) {
    res.status(500).json({ message: "internel error" });
  }
};
