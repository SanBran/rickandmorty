// const { getUsersbyId, getUsers } = require("./handUserSearch.js");
const { putEditUser } = require("./userHandlers/handUserEdit");

const { registerUser } = require("./userHandlers/handUserCreate.js");
const { getActiveUsers } = require("./userHandlers/handActivateUser.js");

module.exports = {
  registerUser,
  getActiveUsers,
  // getUsersbyId,
  // getUsers,
  putEditUser,
};
