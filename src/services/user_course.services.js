const UserCourse = require("../models/usercourses.models");

class UserCourses {
    static async addCourserBy(userId, courseId ) {
        try {
            const result = await UserCourse.create({userId: userId, courseId: courseId});
            console.log("entrando al servicio!!!!");
            return result;
        } catch(error) { throw error; }
    }
}

module.exports = UserCourses;