const express = require('express');
const bodyParser = require('body-parser');

const OngRouter = require('./routes/OngRouter');
const IncidentRouter = require('./routes/IncidentRouter');
const ProfileRouter = require('./routes/ProfileRouter');
const SessionRouter = require('./routes/SessionRouter');
const app = express();

app.use(bodyParser.json());
app.use(OngRouter);
app.use(IncidentRouter);
app.use(ProfileRouter);
app.use(SessionRouter);

app.listen(8080, () => console.log('running in http://localhost:8080'));