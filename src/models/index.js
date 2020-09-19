const Category = require('./category')
const Admin = require('./admin')
const Book = require('./book')
const Transaction = require('./transaction')
const DetailTransaction = require('./detailTransaction')
const Profile = require('./profile')
const Account = require('./account')
const Music = require('./music')
const Author = require('./author')

const dbAssociations = function dbAssociations(){
    Book.belongsToMany(Music, {through: 'bookhasmusic'});
    Music.belongsToMany(Book, {through: 'bookhasmusic'});
    Profile.hasOne(Account);
    Account.belongsTo(Profile, {
        foreignKey: {
            name: 'profile_id'
        }
    });
    Account.hasMany(Transaction);
    Transaction.belongsTo(Account, {
        foreignKey: {
            name: 'account_id'
        }
    });
    Transaction.hasMany(DetailTransaction);
    DetailTransaction.belongsTo(Transaction, {
        foreignKey: {
            name: 'transaction_detail_id'
        }
    });
    Book.hasMany(DetailTransaction);
    DetailTransaction.belongsTo(Book, {
        foreignKey: {
            name: 'book_id'
        }
    });
    Author.hasMany(Book)
    Book.belongsTo(Author, {
        foreignKey: {
            name: 'author_id'
        }
    });
    Author.hasMany(Music)
    Music.belongsTo(Author, {
        foreignKey: {
            name: 'author_book_id'
        }
    });
    Category.belongsToMany(Book, {through:'bookhascategory'});
    Book.belongsToMany(Category, {through:'bookhascategory'});

}
module.exports = dbAssociations