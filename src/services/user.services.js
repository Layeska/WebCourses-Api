const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
const UserCourses = require("../models/usercourses.models");

class UserServices {
    static async getAll() {
        try {
            const user = await Users.findAll({attributes: ["id", "firstName", "lastName", "email"]});
            return user;
        } catch(error) { throw error; }
    }

    static async getById(id) {
        try {
            const filter = await Users.findByPk(id,{attributes: ["firstName", "lastName", "email"]});
            return filter;
        } catch(error) { throw error; }
    }

    static async getByCourse(id) {
        try {
            const find = await Users.findOne({
                where: {id},
                attributes: ["firstName", "lastName", "email"],
                include: {
                    model: UserCourses,
                    as: "course",
                    attributes: {
                        exclude: ["id", "createdAt", "updatedAt", "user_id", "courseId"]
                    },
                    include: {
                        model: Courses,
                        as: "course",
                        attributes: ["title"]
                    }
                }
            });
            return find;
        } catch(error) { throw error; }
    }

    static async addUser(newUser) {
        try {
            const created = await Users.create(newUser);
            return created;
        } catch(error) { throw error; }
    }

    //! Me da error!!!! 
   /* static async addCourseAtUser(body, id) {
        try {
            //const updateCourse = await UserCourses.create(courses);
            //const {id} = updateCourse;
            const result = await UserCourses.create(body, {where: {id}});

            return result;
        } catch(error) { throw error; }
    }*/

    static async update(id, body) {
        try {
            const update = await Users.update({
                firstName: body.firstName, 
                lastName: body.lastName, 
                password: body.password
            }, {where: {id}});
            return update;
        } catch(error) { throw error; }
    }

    
};

module.exports = UserServices;