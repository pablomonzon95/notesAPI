const selectUserByEmail = require("./selectUserByEmail");
const insertUser = require("./insertUser");
const selectUserByRegistrationCode = require("./selectUserByRegistrationCode");
const deleteRegistrationCode = require("./deleteRegistrationCode");
const selectUserById = require("./selectUserById");
module.exports = {
  selectUserByEmail,
  insertUser,
  selectUserByRegistrationCode,
  deleteRegistrationCode,
  selectUserById,
};
