const { userTokenActiv } = require("../../controllers/indexControllers.js");

const getActiveUsers = async (req, res) => {
  const querysUser = req.body;
  try {
    const dataUser = await userTokenActiv(querysUser);
    //console.log("******dataUser******",dataUser)
    if (dataUser.state) {
      res.status(200).json(dataUser);
    } else {
      res.status(400).json(dataUser);
    }
  } catch (error) {
    res.status(500).json({ error: error.mesage });
  }
};

module.exports = {
  getActiveUsers,
};
