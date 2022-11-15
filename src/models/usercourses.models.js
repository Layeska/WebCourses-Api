const Courses = require("./categories.models");
const Users = require("./users.models");

const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const UserCourses = db.define("user_courses", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
        allowNull: false,
        reference: {
            key: "id",
            model: Users
        }
    },
    courseId: {
        type: DataTypes.INTEGER,
        field: "course_id",
        allowNull: false,
        references: {
            key: "id", 
            model: Courses
        }
    }
});

module.exports = UserCourses;