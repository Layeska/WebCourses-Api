const UserCourserService = require("../services/user_course.services");

const addCourseAtUser = async(req, res, next) => {
    console.log("*** Entrando al controlador!!!");
    try {
        const {userId} = req.params;
        const {courseId} = req.body;
        console.log("capturando datos del controlador!!!!");
        console.log(userId, courseId);
        const addNewCourse = await UserCourserService.addCourserBy(Number(userId), courseId);
        res.json(addNewCourse);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Review submitted information" 
        });
    }
};

module.exports = { addCourseAtUser };