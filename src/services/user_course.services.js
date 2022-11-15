const UserCourse = require("../controllers/user_courses.controllers");

class UserCourses {
    static async addCourserBy(userId, body ) {
        try {
            const result = await UserCourse.create({
                userId: 1, courseId: 2
            });
            return result;
        } catch(error) { throw error; }
    }
}

module.exports = UserCourses;