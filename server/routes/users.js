const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.post("/", usersController.createUser);
router.get("/", usersController.getUsers);

module.exports = router;