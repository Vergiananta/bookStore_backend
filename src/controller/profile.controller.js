const getProfileList = async(req, res, service) => {
    try {
        let profiles ;
        if (req.params.id) {
            const id = req.query.id;
            profiles = await service. getProfileById(id)
        } else {
            profiles = await service. getAllProfile();
        }
        res.send(profiles);
    } catch (error) {
        res.status(500);
    }
};

module.exports = {getProfileList}