const { Router } = require("express");
const { addCourse, getAllCoursesByUSer, 
    getShowCourse, editCourse } = require("../controllers/courses.controllers");

const authorization = require("../middlewares/auth.middlewares");

const route = Router();

route.get("/courses/:userId", authorization ,getAllCoursesByUSer);

route.get("/courses", authorization, getShowCourse);

route.post("/courses", authorization, addCourse);

route.put("/courses/:id", authorization, editCourse);

module.exports = route;