const { User } = require("../../DB_connection");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const saltRounds = 11;

const userRegister = async (name, email, password, image) => {
  const dataState = {
    state: false,
    text: "",
    detail: "",
  };
  try {
    const objdata = { name, email, password, image };
    // console.log(objdata)

    const token = crypto.randomBytes(13).toString("hex");

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

    //console.log("listWish" ,objRegister.listWish.length);
    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
      image: image,
    });

    // console.log("entro try",users);
    // console.log("created",created);
    // console.log("entro created");
    if (newUser) {
      const tokenJwt = jwt.sign(
        { userId: newUser.id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "24h" }
      );
      console.log("tokenJwt", tokenJwt);
      dataState.state = true;
      dataState.text = "User registered successfully";
      dataState.detail = { newUser, tokenJwt };
      return dataState;
    } else {
      dataState.state = false;
      dataState.text = "User already exists";
      dataState.detail = newUser;
      throw Error(JSON.stringify(dataState));
    }
  } catch (error) {
    // console.log(error);
    dataState.state = false;
    dataState.text = "ERROR INSERTANDO USER";
    dataState.detail = error.data;
    throw Error(JSON.stringify(dataState));
  }
};

module.exports = {
  userRegister,
};
