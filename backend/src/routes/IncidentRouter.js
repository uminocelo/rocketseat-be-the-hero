const express =  require('express');
const incidentRouter = express.Router();
const IncidentController = require('../controllers/IncidentController');

incidentRouter.get('/incident', IncidentController.index);
incidentRouter.post('/incident', IncidentController.create);
incidentRouter.delete('/incident/:id', IncidentController.delete);

module.exports = incidentRouter;