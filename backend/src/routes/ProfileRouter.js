const express =  require('express');
const ProfileRouter = express.Router();
const ProfileController = require('../controllers/ProfileController');

ProfileRouter.get('/profile', ProfileController.index);

module.exports = ProfileRouter;