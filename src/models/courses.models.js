const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const Courses = db.define("courses", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    instructor: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Courses;