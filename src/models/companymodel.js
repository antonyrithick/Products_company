const { DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const companymodel = sequelize.define(
  "companylist",
  {
    compay_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    compay_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comapany_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    company_sector: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_passoword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "company_list",
  }
);

module.exports = companymodel;
