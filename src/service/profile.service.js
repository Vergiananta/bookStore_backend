const {APP_ERROR} = require('../constant/error-event.constant');
const Profile = require('../models/profile');
const logEvent = require('../event/myEmitter');
const Account = require('../models/account');
const connection = require('../../dbConn')

class ProfileService {
    async getAllProfile(){
        let result;
        try {
            result = await Profile.findAll({include: Account})
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'FAILED GET ALL PROFILE',
                logEvent: error
            });
        }
        return result;
    }

    async getProfileById(id){
        let result;
        try {
            result = await Profile.findOne({include: Account, where: {id: id}})
        } catch (error) {
            logEvent.emit(APP_ERROR, {
                logTitle: 'FAILED GET PROFILE ID',
                logMessage: error
            });
        }
        return result;
    }
}

module.exports = ProfileService;