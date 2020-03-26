const express =  require('express');
const ongRouter = express.Router();
const OngController = require('../controllers/OngController');

ongRouter.get('/ong', OngController.index);
ongRouter.post('/ong', OngController.create);

module.exports = ongRouter;