const Sequelize = require('sequelize');
const connection = require('../../dbConn');

const DetailTransaction = connection.define('detail_transaction',{
  id : { 
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
  },
  subTotal: {
      type: Sequelize.INTEGER,
      allowNull: false,
  },
  price: {
      type: Sequelize.INTEGER,
      allowNull: false,
  },
}, {
    freezeTableName: true,
    tableName: 'detail_transaction',
    paranoid: true    
});

module.exports = DetailTransaction;