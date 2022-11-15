const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const UserCourses = require("../models/usercourses.models");
const Videos = require("../models/videos.models");


class courseServices {
    static async getByIdUser() {
        try {
            const result = await UserCourses.findAll({ 
                attributes: {
                    exclude: ["id", "userId", "courseId", "createdAt", "updatedAt", "course_id", "user_id"]
                },
                include: {
                    model: Courses,
                    as: "course",
                }
            });
            return result;
        } catch(error) { throw error; }
    }

    static async getShow() {
        try {
            const result = await Courses.findAll({
                include: [ {
                        model: Categories,
                        attributes: ["name"] },{
                        model: Videos,
                        attributes: { exclude: ["createdAt", "courseId", "updatedAt", "id", "course_id"]}}
                ]
            });
            return result;
        } catch(error) { throw error; }
    }

    static async create(course) {
        try {
            const result = await Courses.create(course);
            return true;
        } catch(error) { throw error; }
    }

    static async edit(id, descriptionBody) {
        try {
            const result = await Courses.update({description: descriptionBody},{where: {id}})
            return result;
        } catch(error) { throw error; }
    }
}

module.exports = courseServices;