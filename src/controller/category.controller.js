const getCategoryList = async (req, res, service) => {
    try {
        let categories;
        if (req.query.id) {
            const id = req.query.id;
            categories = await service.getCategoryById(id)
        } else {
            categories = await service.getAllCategory();
        }
        res.send(categories);
    } catch (error) {
        res.status(500);
    }
};

module.exports = {getCategoryList}