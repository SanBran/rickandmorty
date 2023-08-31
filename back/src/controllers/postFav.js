const { Favorite, User } = require("../DB_connection");

const postFav = async (req, res) => {
  const { user, id, name, origin, image, species, gender } = req.body;
  try {
    const [favorite, created] = await Favorite.findOrCreate({
      where: { name, id, origin, image, species, gender },
    });
    const users = await User.findAll({
      where: {
        id: user.id,
      },
    });

    await favorite.addUser(users);

    res.status(200).json(favorite);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  postFav,
};
