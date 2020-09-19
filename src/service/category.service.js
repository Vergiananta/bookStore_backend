const connection = require('../../dbConn');
const {APP_ERROR} = require('../constant/error-event.constant');
const Book = require('../models/book');
const Category = require('../models/category');
const logEvent = require('../event/myEmitter');

class CategoryService {
    async getAllCategory(){
        let result;
        try {
            result = await Category.findAll({include:Book})
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'FAILED GET ALL',
                logMessage: error
            });
        }
        return result;
    }

    async getCategoryById(id){
        let result;
        try {
            result = await Category.findOne({include:Book, where: {id: id}})
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'FAILED GET CATEGORY BY ID',
                logMessage: error
            })
        }
        return result;
    }
}

module.exports = CategoryService;