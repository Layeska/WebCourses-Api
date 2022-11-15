const Courses = require("./courses.models");
const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const Videos = db.define("videos", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ulr: {
        type: DataTypes.STRING,
        allowNull: true
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

module.exports = Videos;