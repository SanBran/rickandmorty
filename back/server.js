require("dotenv").config();
const express = require("express");
const router = require("./src/routes");
const cors = require("cors");
const morgan = require("morgan");
const { conn } = require("./src/DB_connection");

const PORT = process.env.PORT || 8000;

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(
  cors({
    origin: "*",
  })
);

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.urlencoded({ extended: true }));

server.use("/", router);

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("Server raised in port " + PORT);
  });
});
