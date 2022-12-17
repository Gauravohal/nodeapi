const { empTestController, empLoginController } = require("../controller/empControllers");

const router = require("express").Router();

router.get("/test",empTestController)

router.get("/login",empLoginController)

module.exports = router