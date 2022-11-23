const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const bcrypt = require("bcrypt");

const Users = db.define("users", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "first_name"
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "last_name"
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true }
    }
}, {
    hooks: {
        beforeCreate: (user, options) => {
            const {password} = user;
            const hash = bcrypt.hashSync(password, 8);
            user.password = hash;
        },
        beforeUpdate: (user, options) => {
            const {password} = user;
            const update = bcrypt.hashSync(password, 8);
            user.password = update;
        }
    }
});

module.exports = Users;