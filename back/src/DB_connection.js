require("dotenv").config();
const {pg} = require('pg')
const { Sequelize } = require("sequelize");
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectModule: pg,
  dialect: 'postgres',
  dialectOptions: {
    ssl: true,
  },
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

UserModel(sequelize);

FavoriteModel(sequelize);

const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
