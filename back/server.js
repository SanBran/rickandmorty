require("dotenv").config();
const express = require("express");
const router = require("./src/routes");
const cors = require("cors");
const morgan = require("morgan");
const { conn } = require("./src/DB_connection");

const PORT = process.env.PORT || 3000;

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use("/", router);

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("Server raised in port " + PORT);
  });
});
