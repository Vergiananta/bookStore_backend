const express = require('express');
const router = express.Router();
const CategoryService = require('../service/category.service');
const CategoryController = require('../controller/category.controller');
const {route} = require('../middleware/app-middleware');


const categoryService = new CategoryService()

router.get('/category', (req, res) => CategoryController.getCategoryList(req, res, categoryService));
router.get('/category/:id', (req, res) => CategoryController.getCategoryList(req, res, categoryService))

module.exports = router;