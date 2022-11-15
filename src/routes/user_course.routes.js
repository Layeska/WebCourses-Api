const { Router } = require("express");
const {addCourseAtUser} = require("../controllers/user_courses.controllers");

const authorization = require("../middlewares/auth.middlewares");

const route = Router();

//++ Add a course to a user
route.post("/courses/:userId/courses", authorization, addCourseAtUser);

module.exports = route;