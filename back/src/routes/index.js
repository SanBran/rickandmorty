const { Router } = require("express");
const { routeUsers } = require("./user.js");
const { routeChar } = require("./character.js");

const { postFav } = require("../controllers/postFav");
const { getFavs } = require("../controllers/getFavs");
const { deleteFav } = require("../controllers/deleteFav");

const router = Router();

router.use("/", routeUsers);
router.use("/", routeChar);

router.post("/newfav", postFav);
router.post("/fav", getFavs);
router.delete("/fav/:id", deleteFav);

module.exports = router;
