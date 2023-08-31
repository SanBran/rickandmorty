const { Router } = require("express");
const {
  getCharacterByName,
  getCharacterById,
} = require("../controllers/characterControllers/searchByQuery");

const routeChar = Router();

routeChar.get("/character/:name", getCharacterByName);
routeChar.get("/character/random/:id", getCharacterById);

module.exports = { routeChar };
