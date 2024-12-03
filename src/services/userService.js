const { where, Op } = require("sequelize");
const User = require("../models/usermodel");

exports.getAllUser = async () => {
  return await User.findAll();
};

exports.createUser = async (userData) => {
  return await User.create(userData);
};

exports.updateUser = async (id, updatedData) => {
  return await User.update(updatedData, { where: { id: id } });
};

exports.deleteUser = async (id) => {
  return await User.destroy({ where: { id: id } });
};

exports.getOneUser = async (id) => {
  return await User.findOne({ where: { id: id } });
};

exports.loginOneUser = async (email) => {
  return await User.findOne({ where: { email: email } });
};

exports.getUserRange = async () => {
  return await User.findAll({ order: [["name", "ASC"]] });
};

exports.getUserCount = async () => {
  return await User.count();
};
