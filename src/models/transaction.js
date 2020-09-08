const Sequelize = require('sequelize');
const connection = require('../../dbConn');

const Transaction = connection.define('transaction',{
    id : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    grandTotal: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'transaction',
    paranoid: true    
});

module.exports = Transaction;