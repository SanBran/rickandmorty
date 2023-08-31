const { Favorite, User } = require("../DB_connection");

const getFavs = async (req, res) => {
  const { id } = req.body;
  console.log(id);

  try {
    const favs = await Favorite.findAll({
      include: { model: User, where: { id: id } },
    });
    res.status(200).json(favs);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getFavs };
