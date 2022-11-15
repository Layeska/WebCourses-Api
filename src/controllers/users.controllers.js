const UserServices = require("../services/user.services");

const getAllUsers = async(req, res, next) => {
    try {
        const showUser = await UserServices.getAll();
        res.json(showUser);
    } catch(error) {
        next({
            status: 500, 
            errorContent: error,
            message: "An error occurred while retrieving data from the DB"
        });
    }
};

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
        res.json(newUser);
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
        res.json(DataUpdate);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Review submitted information" 
        });
    }
};

/*
{
    course_id: 1
}
*/

//! Me da error!!!! 
/*const addCourseByUser = async(req, res, next) => {
    try {
        console.log(req.body);
        const {id} = req.params;
        const body = req.body;
        const addNewCourse = await UserServices.addCourseAtUser(body, userId);
        res.json(addNewCourse);
    } catch(error) {
        next({
            status: 400,
            errorContent: error,
            message: "Review submitted information" 
        });
    }
};*/

module.exports = {
    getAllUsers, 
    getByUserId,
    getUserByCourse,
    createUser,
    updateItems,
    
};
