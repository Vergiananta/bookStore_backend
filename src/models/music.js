const Sequelize = require('sequelize');
const connection = require('../../dbConn');


const Music = connection.define('music',{
    id: { 
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    audio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    singer: {
        type: Sequelize.STRING,
        allowNull: true
    },
    album: {
        type: Sequelize.STRING,
        allowNull: false
    },
    artist: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
   freezeTableName: true,
   tableName: 'music',
   paranoid: true
});

module.exports = Music;