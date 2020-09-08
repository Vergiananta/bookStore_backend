const Sequelize = require('sequelize');
const connection = require('../../dbConn');

const gender = {
    MALE = 0,
    FEMALE = 1,
}

const Profile = connection.define('profile',{
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    firstName : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    photo : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Gender : {
        type: gender,
        allowNull: false,
    },
    address : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    birthDate : {
        type: Sequelize.DATE,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    tableName: 'profile',
    paranoid: true,
});

module.exports = Profile
