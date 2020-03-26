const express =  require('express');
const SessionRouter = express.Router();
const SessionController = require('../controllers/SessionController');

SessionRouter.post('/session', SessionController.create);

module.exports = SessionRouter;