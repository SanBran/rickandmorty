const { userRegister } = require("../../controllers/indexControllers.js");

const registerUser = async (req, res) => {
  const { name, email, password, image } = req.body;

  try {
    const user = await userRegister(name, email, password, image);
    if (user.state) {
      res.status(200).json(user);
    } else {
      res.status(400).json(user);
    }
  } catch (error) {
    // console.log(error)
    res.status(500).json(error);
  }
};

module.exports = {
  registerUser,
};
