const db = require("../utils/database");
const {DataTypes} = require("sequelize");
const Courses = require("./courses.models");

const Categories = db.define("categories", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "course_id",
        references: {
            key: "id",
            model: Courses
        }
    }
});

module.exports = Categories;