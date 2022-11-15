const { Router } = require("express");
const {addCourseAtUser} = require("../controllers/user_courses.controllers");

const authorization = require("../middlewares/auth.middlewares");

const route = Router();

route.post("/courses/:userId/courses",addCourseAtUser);

module.exports = route;