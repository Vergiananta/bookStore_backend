const express = require('express');
const dbAssociations = require('../models')
const router = express.Router();

router.use(express.json());

router.use((req, res, next) => {
    dbAssociations();
    next();
})

module.exports = router;