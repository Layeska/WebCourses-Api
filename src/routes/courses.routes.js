const { Router } = require("express");
const { addCourse, getAllCoursesByUSer, getShowCourse, editCourse } = require("../controllers/courses.controllers");

const authorization = require("../middlewares/auth.middlewares");
const route = Router();

//++ Get all courses
route.get("/courses/all", authorization ,getAllCoursesByUSer);

//++ Get all courses along with their categories and videos
route.get("/courses", authorization, getShowCourse);

//++ Create a new course
route.post("/courses", authorization, addCourse);

//++ Edit a course (only change the description is allowed)
route.put("/courses/:id", authorization, editCourse);

module.exports = route;