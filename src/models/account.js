const Sequelize = require('sequelize')
const connection = require('../../dbConn')

const Account = connection.define('account', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true,
    tableName: 'account',
    paranaoid: true
});

module.exports = Account;