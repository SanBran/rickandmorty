const { updUser } = require("../../controllers/indexControllers");

const putEditUser = async (req, res) => {
  const { id, name, image } = req.body;
  try {
    const updatedData = {
      name,
      image,
    };

    const userDataUpd = await updUser(id, updatedData);
    if (userDataUpd.state) {
      res.status(200).json(userDataUpd);
    } else {
      res.status(400).json(userDataUpd);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  putEditUser,
};
