const { User } = require("../../DB_connection");

const userTokenActiv = async (querysUser) => {
  try {
    const dataState = {
      state: false,
      text: "",
      detail: "",
    };

    const { email, password } = querysUser;

    try {
      const whereCondition = {
        email: email,
      };

      const userValidate = await buscaUsu(whereCondition);
      if (userValidate.cantUser > 0) {
        const userObj = userValidate.findUser[0];
        const passwordDB = userObj.dataValues.password;
        const isMatch = password == passwordDB;
        if (isMatch) {
          // console.log("userValidate", userValidate);
          // console.log("userObj", userObj);
          dataState.state = true;
          dataState.text = "User successfully validated";
          dataState.detail = userObj;
          // console.log("dataState", dataState);
          return dataState;
        } else {
          // console.log("Contraseña inválida");
          dataState.state = false;
          dataState.text = "invalid password";
          return dataState;
        }
      } else {
        dataState.state = false;
        dataState.text = "User not found";
        return dataState;
      }
    } catch (err) {
      dataState.state = false;
      dataState.text = err.message;
      throw Error(JSON.stringify(dataState));
    }
  } catch (err) {
    dataState.state = false;
    dataState.text = err.message;
    throw Error(JSON.stringify(dataState));
  }
};

const buscaUsu = async (whereCondition) => {
  const { rows: findUser, count: cantUser } = await User.findAndCountAll({
    where: whereCondition,
  });
  return { cantUser, findUser };
};

module.exports = {
  userTokenActiv,
};
