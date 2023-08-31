const { Router } = require("express");
const {
  registerUser,
  putEditUser,
  getActiveUsers,
} = require("../handlers/indexHandlers");

const routeUsers = Router();

routeUsers.post("/newUser", registerUser);
routeUsers.post("/activateUser", getActiveUsers);
routeUsers.put("/updUser", putEditUser);

module.exports = { routeUsers };
