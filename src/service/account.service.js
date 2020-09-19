const {APP_ERROR} = require('../constant/error-event.constant');
const Transaction = require('../models/transaction');
const Account = require('../models/account');
const logEvent = require('../event/myEmitter');

class AccountService {
    async getAllAccount() {
        let result;
        try {
            result = await Account.findAll({include: Transaction })
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'FAILED GET All Account',
                logMessage: error
            });
        }
        return result;
    }

    async getAccountById(id) {
        let result;
        try {
            result = await Account.findOne({include: Book, where: {id: id}})
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'FAILED GET Account By Id',
                logMessage: error
            });
        }
        return result;
    }
}

module.exports = AccountService;