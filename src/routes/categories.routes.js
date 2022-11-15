const {Router} = require("express");
const {createCategory, deleteCategory} = require("../controllers/category.controllers");

const authorization = require("../middlewares/auth.middlewares");
const router = Router();

//++ Create categories
router.post("/category", authorization, createCategory);

//++ Delete categories
router.delete("/category/:id", authorization, deleteCategory);

module.exports = router;