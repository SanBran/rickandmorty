const { Favorite, User } = require("../DB_connection");

const postFav = async (req, res) => {
  const { userId, name, origin, image, species, gender } = req.body;
  try {
    const [favorite, created] = await Favorite.findOrCreate({
      where: { name, origin, image, species, gender },
    });
    console.log(favorite);
    const user = await User.findAll({
      where: {
        id: userId.id,
      },
    });

    console.log(user);

    await favorite.addUser(user);

    res.status(200).json(favorite);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  postFav,
};
