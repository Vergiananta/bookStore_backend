const getAdminList = async (req, res, service) => {
    try {
        let admins;
        if (req.query.id) {
            const id = req.query.id;
            admins = await service.getAdminById(id);
        } else {
            admins = await service.getAllAdmin();
        }
        res.send(admins);
    } catch (error) {
        res.status(500);
    }
};

module.exports = {getAdminList}