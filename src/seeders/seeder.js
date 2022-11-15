const db = require("../utils/database");
const initModels = require("../models/initModels");

const Users = require("../models/users.models");
const Course = require("../models/courses.models");
const UserCourses = require("../models/usercourses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");

initModels();

const users = [
    {firstName: "Luisa", lastName: "Moreno", password: "15430", email: "luisa@gmail.com"},
    {firstName: "Maria", lastName: "Fernandez", password: "15430", email: "fernandez58@gmail.com"},
    {firstName: "Pedro", lastName: "Rosales", password: "15430", email: "pedro16rosales@gmail.com"},
    {firstName: "Carlos", lastName: "Sinclair", password: "15430", email: "carlos@outlook.com"}
];

const courses = [
    {title: "Operating Systems I", description: "Second Module Teacher Rene", instructor: "Rene Flores"},
    {title: "Color Psychology", description: "", instructor: "Rene Flores"},
    {title: "Investigation Methodology", description: "Final evaluation: investigative work", instructor: "Rene Flores"},
    {title: "Calculus II", description: "Derivatives and integrations", instructor: "Rene Flores"}
];

const usersCourses = [
    {userId: 1, courseId: 2},
    {userId: 1, courseId: 3},
    {userId: 2, courseId: 1},
    {userId: 1, courseId: 2},
    {userId: 3, courseId: 3},
    {userId: 3, courseId: 4},
    {userId: 4, courseId: 1}
];

const category = [
    {name: "Advanced", courseId: 4},
    {name: "Advanced", courseId: 1},
    {name: "Primary", courseId: 3},
    {name: "intermediate", courseId: 2}
];

const videos = [
    {title: "General History", url:"https://xxxxxx.com.ni", courseId: 2},
    {title: "Variable duplication", url:"https://xxxxxx.com.ni", courseId: 1},
    {title: "Sequences and divergent functions", url:"https://xxxxxx.com.ni", courseId: 4},
    {title: "functional limit", url:"https://xxxxxx.com.ni", courseId: 4},
    {title: "Population sample", url:"https://xxxxxx.com.ni", courseId: 3}
];

db.sync({force: false}).then(async() => {
    console.log("*** Starting Seeder ***");
    users.forEach(user => Users.create(user));
}).then(() => {courses.forEach(course => Course.create(course))})
.then(() => {usersCourses.forEach(info => UserCourses.create(info))})
.then(() => {videos.forEach(video => Videos.create(video))})
.then(() => {category.forEach(category => Categories.create(category))});