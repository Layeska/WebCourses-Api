const CategoryService = require("../services/category.services");

const createCategory = async(req, res, next) => {
    try {
        const newCreated = req.body;
        console.log(newCreated);
        const result = await CategoryService.create(newCreated);
        res.json({message: "Successfully Created Category"});
    } catch(error) {
        next({
            status: 400, 
            errorContent: error,
            message: "Course not Updated"
        });
    }
};

const deleteCategory = async(req, res, next) => {
    try {
        const {id} = req.params;
        const result = await CategoryService.delete(id);
        res.json({message: "Category successfully deleted"});
    } catch(error) { 
        next({
            status: 400, 
            errorContent: error,
            message: "Course not Updated"
        });
    }
};

module.exports = { createCategory, deleteCategory };