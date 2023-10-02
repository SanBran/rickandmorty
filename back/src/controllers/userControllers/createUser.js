const { User } = require("../../DB_connection");

const userRegister = async (name, email, password, image) => {
  const dataState = {
    state: false,
    text: "",
    detail: "",
  };
  try {
    const objdata = { name, email, password, image };
    // console.log(objdata)

    const userFind = await User.findOne({
      where: {
        email: email,
      },
    });
    if (userFind) {
      dataState.state = false;
      dataState.text = "User already exists";
      return dataState;
    }

    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
      image: image,
    });

    if (newUser) {
      dataState.state = true;
      dataState.text = "User registered successfully";
      dataState.detail = { newUser };
      return dataState;
    } else {
      dataState.state = false;
      dataState.text = "User already exists";
      dataState.detail = newUser;
      throw Error(JSON.stringify(dataState));
    }
  } catch (error) {
    console.log(error);
    dataState.state = false;
    dataState.text = "ERROR INSERTANDO USER";
    dataState.detail = error.data;
    throw Error(JSON.stringify(dataState));
  }
};

module.exports = {
  userRegister,
};
