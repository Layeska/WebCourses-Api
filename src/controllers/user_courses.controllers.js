const UserCourserService = require("../services/user_course.services");

const addCourseAtUser = async(req, res, next) => {
    try {
        const {userId} = req.params;
        const {courseId} = req.body;
        const addNewCourse = await UserCourserService.addCourserBy(Number(userId), courseId);
        res.json({message: "Course Added Successfully"});
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Review submitted information" 
        });
    }
};

module.exports = { addCourseAtUser };