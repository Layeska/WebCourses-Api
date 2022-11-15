const UserCourserService = require("../services/user_course.services");

const addCourseAtUser = async(req, res, next) => {
    try {
        const {userId} = req.params;
        const body = req.body.courseId;
        console.log(body, userId);
        const addNewCourse = await UserCourserService.addCourseAtUser(userId, body);
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