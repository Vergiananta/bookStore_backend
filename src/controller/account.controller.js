const getAccountList = async (req, res, service) => {
    try {
        let accounts;
        if (req.query.id) {
            const id = req.query.id;
            accounts = await service.getCategoryById(id)
        } else {
            accounts = await service.getAllAccount();
        }
        res.send(accounts);
    } catch (error) {
        res.status(500);
    }
};

module.exports = {getAccountList};