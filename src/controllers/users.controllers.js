const UserServices = require("../services/user.services");

const getByUserId = async(req, res, next) => {
    try {
        const {id} = req.params;
        const consult = await UserServices.getById(id);
        res.json(consult);
    } catch(error) {
        next({
            status: 404,
            errorContent: error,
            message: "User not found!"
        });
    }
};

const getUserByCourse = async(req, res, next) => {
    try {
        const {id} = req.params;
        const toFind = await UserServices.getByCourse(id);
        res.json(toFind);
    } catch(error) {
        next({
            status: 404,
            errorContent: error,
            message: "Course not found"
        });
    }
};

const createUser = async(req, res, next) => {
    try {
        const bodyUser = req.body;
        const newUser = await UserServices.addUser(bodyUser);
        res.json({message: "Successfully Created User"});
    } catch(error) {
        next({
            status: 418,
            errorContent: error,
            message: "Review submitted information" 
        });
    }
};

const updateItems = async(req, res, next) => {
    try {
        const {id} = req.params;
        const newBody = req.body;
        const DataUpdate = await UserServices.update(id, newBody);
        res.json({message: "User Edit Successfully!"});
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Review submitted information" 
        });
    }
};

module.exports = {
    getByUserId,
    getUserByCourse,
    createUser,
    updateItems,
};