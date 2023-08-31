const axios = require("axios");
const URL = process.env.URL;

const getCharacterByName = (req, res) => {
  const { name } = req.params;
  const characters = [];
  axios
    .get(`${URL}/character/?name=${name}`)
    .then((response) => {
      const results = response.data.results;
      for (let char of results) {
        const apiData = {
          id: char.id || "Unknow",
          name: char.name || "Unknow",
          species: char.species || "Unknow",
          image: char.image || "Unknow",
          gender: char.gender || "Unknow",
          origin: char.origin.name || "Unknow",
        };
        characters.push(apiData);
      }
      res.status(200).json(characters);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

const getCharacterById = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL}/character/${id}`)
    .then((response) => {
      const { id, name, species, image, gender, origin } = response.data;
      res.status(200).json({ id, name, species, image, gender, origin });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = { getCharacterByName, getCharacterById };
