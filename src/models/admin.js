const Sequelize = require('sequelize')
const connection = require('../../dbConn')

const gender = {
    MALE = 0,
    FEMALE = 1,
}

const Admin = connection.define('admin',{
    id : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    firstName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    userName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    passwords : {
        type: Sequelize.STRING,
        allowNull: false
    },
    position : {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthDate : {
        type: Sequelize.DATE,
        allowNull: false
    },
    gender : {
        type: gender,
        allowNull: false
    },    
}, {
    freezeTableName: true,
    tableName: 'admin',
    paranoid: true,
});

module.exports = Admin;