const {Router} = require("express");

const { getAllUsers, getByUserId, getUserByCourse,
        createUser, updateItems, addCourseByUser } = require("../controllers/users.controllers");

const router = Router();

router.get("/users", getAllUsers);

router.get("/users/:id", getByUserId);

router.get("/users/:id/course", getUserByCourse);

router.post("/users", createUser);

//! Me da error!!!! 
//router.post("/users/:userId/course", addCourseByUser);

router.patch("/users/:id", updateItems);

module.exports = router;