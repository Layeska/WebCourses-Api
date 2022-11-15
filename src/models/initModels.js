const Users = require("./users.models");
const UserCourses = require("./usercourses.models");
const Categories = require("./categories.models");
const Courses = require("./courses.models");
const Videos = require("./videos.models");

const initModels = () => {
    UserCourses;

    //! Relation N:M
    UserCourses.belongsTo(Users, {as: "user", foreignKey: "user_id"});
    Users.hasMany(UserCourses, {as: "course", foreignKey: "user_id"});

    UserCourses.belongsTo(Courses, {as: "course", foreignKey: "course_id"});
    Courses.hasMany(UserCourses, {as: "users", foreignKey: "course_id"});

    //! Relation 1:N
    Categories.belongsTo(Courses, { foreignKey: "course_id"});
    Courses.hasMany(Categories, {  foreignKey: "course_id"});

    Videos.belongsTo(Courses, {foreignKey: "course_id"});
    Courses.hasMany(Videos, { foreignKey: "course_id"});
};

module.exports = initModels;

/* 

++ Relations

users - courses --- N:M 
Course - Category --- 1:M
Course - Video --- 1:M 

*/