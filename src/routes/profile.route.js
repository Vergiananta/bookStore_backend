const express = require('express');
const router = express.Router();
const ProfileService = require('../service/profile.service');
const ProfileController = require('../controller/profile.controller');
const {route} = require('../middleware/app-middleware');

const profileService = new ProfileService()

router.get('/profile', (req, res) => ProfileController.getProfileList(req, res, profileService));
router.get('/profile/:id', (req, res) => ProfileController.getProfileList(req, res, profileService));

module.exports = router;