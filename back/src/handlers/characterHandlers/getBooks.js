const {
  searchByQuery,
} = require("../../controllers/userControllers/characterControllers/searchByQuery");

const getCharacter = async (req, res) => {
  const name = req.body;

  try {
    const result = await searchByQuery(name);
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCharacter,
};
