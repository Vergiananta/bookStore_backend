const Sequelize = require('sequelize')
const connection = require('../../dbConn')

const Book = connection.define('book',{
   id: { 
       type: Sequelize.UUID,
       defaultValue: Sequelize.UUIDV4,
       allowNull: false,
       primaryKey: true
   },
   title: {
       type: Sequelize.STRING,
       allowNull: false
   },
   synopsis: {
       type: Sequelize.TEXT,
       allowNull: false
   },
   imageCover: {
        type: Sequelize.STRING,
        allowNull: false
   },
   imageContent: {
       type: Sequelize.STRING,
       allowNull: false
   },
   author: {
       type: Sequelize.STRING,
       allowNull: false
   },
   datePublication: {
       type: Sequelize.DATE,
       allowNull: false
   },
   publisher: {
       type: Sequelize.STRING,
       allowNull: false
   },
}, {
    freezeTableName: true,
    tableName: 'book',
    paranoid: true,
});

module.exports = Book;