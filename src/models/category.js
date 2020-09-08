const Sequelize = require('sequelize');
const connection = require('../../dbConn');

const enumCategory = {
    COMIC = 0,
    HORROR = 1,
    NOVEL = 2,
    FANTASY = 3,
    ROMANCE = 4,
    COOKBOOKS = 5,
    HISTORY = 6,
    SCI_FI = 7,
    SHORT_STORIES = 8,
    BIOGRAPHICS = 9
}

const Category = connection.define({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: enumCategory,
        allowNull: false
    },

}, {
    freezeTableName: true,
    tableName: 'category',
    paranoid: true
});

module.exports = Category;