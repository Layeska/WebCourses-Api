const CourseServices = require("../services/courses.services");

const getAllCoursesByUSer = async(req, res, next) => {
    try {
        const {userId} = req.params;
        const sendInformation = await CourseServices.getByIdUser(userId);
        res.json(sendInformation);
    } catch(error) {
        next({
            status: 400, 
            errorContent: error,
            message: "Course not Updated"
        });
    }
};

const getShowCourse = async(req, res, next) => {
    try {
        const result = await CourseServices.getShow();
        res.json(result);
    } catch(error) {
        next({
            status: 400, 
            errorContent: error,
            message: "Course not Updated"
        });
    }
};

const addCourse = async(req, res, next) => {
    try {
        const course = req.body;
        const result = await CourseServices.create(course);
        res.json({message: "Successfully Created Course"});
    } catch(error) {
        next({
            status: 400, 
            errorContent: error,
            message: "Course not Updated"
        });
    }
};

const editCourse = async(req, res, next) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const result = await CourseServices.edit(id, description);
        res.json({message: "Successfully Updated Course"});
    } catch(error) { 
        next({
            status: 400, 
            errorContent: error,
            message: "Course not Updated"
        });
    }
};

module.exports = {
    getAllCoursesByUSer,
    getShowCourse,
    addCourse,
    editCourse
}