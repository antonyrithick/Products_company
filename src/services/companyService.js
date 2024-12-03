const { Sequelize } = require("sequelize");
const company_list = require("../models/companymodel");

exports.getCompanyAll = async () => {
  return await company_list.findAll();
};

exports.CreateCompany = async (companyData) => {
  return await company_list.create(companyData);
};

exports.getcompanyCount = async () => {
  return await company_list.count();
};

exports.getcompanyBysector = async () => {
  return await company_list.findAll({
    attributes: [
      [
        Sequelize.fn("DISTINCT", Sequelize.col("company_sector")),
        "company_sector",
      ],
    ],
  });
};
