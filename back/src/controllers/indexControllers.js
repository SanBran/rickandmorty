const { userRegister } = require("./userControllers/createUser");
// const {
//   getAllUsers,
//   getUserByIdentificator,
//   getUserByParams,
// } = require("./getDataUsers.js");
const updUser = require("./userControllers/editUser");
// const { paranoidUser } = require("./restoreUser.js");
const { userTokenActiv } = require("./userControllers/activateUser.js");

module.exports = {
  userRegister,
  // getAllUsers,
  // getUserByIdentificator,
  // getUserByParams,
  updUser,
  // paranoidUser,
  userTokenActiv,
};
