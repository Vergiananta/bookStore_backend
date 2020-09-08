const Sequelize = require('sequelize');
const connection = require('../../dbConn');

const gender = {
    MALE: 0,
    FEMALE: 1
}

const Author = connection.define('author',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: gender,
        allowNull: false
    },
    birthDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    profileStory: {
        type: Sequelize.TEXT,
        allowNull: true
    }
}, {
  freezeTableName: true,
  tableName: 'author',
  paranoid: true,
});

module.exports = Author;