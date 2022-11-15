const {Router} = require("express");
const { createCategory, deleteCategory } = require("../controllers/category.controllers");

const authorization = require("../middlewares/auth.middlewares");

const router = Router();

router.post("/category", authorization, createCategory);

router.delete("/category/:id", authorization, deleteCategory);

module.exports = router;