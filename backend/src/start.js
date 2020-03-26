const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const OngRouter = require('./routes/OngRouter');
const IncidentRouter = require('./routes/IncidentRouter');
const ProfileRouter = require('./routes/ProfileRouter');
const SessionRouter = require('./routes/SessionRouter');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(OngRouter);
app.use(IncidentRouter);
app.use(ProfileRouter);
app.use(SessionRouter);


app.listen(3333, () => console.log('running in http://localhost:3333'));