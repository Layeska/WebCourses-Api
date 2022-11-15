const {Sequelize} = require("sequelize");

const db = new Sequelize({
    database: process.env.DB_NAME || "webcourses",
    username: process.env.DB_USER || "postgres",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    password: process.env.DB_PASSWORD || "root",
    dialect: "postgres",
    logging: false
});

module.exports = db;