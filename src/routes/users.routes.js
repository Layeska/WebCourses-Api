const {Router} = require("express");
const { getByUserId, getUserByCourse, createUser, updateItems } = require("../controllers/users.controllers");

const router = Router();

//++ Get a user by their id
router.get("/users/:id", getByUserId);

//++ Get a user along with courses where they are subscribed
router.get("/users/:id/course", getUserByCourse);

//++ Create a user
router.post("/users", createUser);

//++ Update a user, (only names and passwords will be allowed)
router.patch("/users/:id", updateItems);

module.exports = router;