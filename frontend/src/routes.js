import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Logon} />
                <Route path="/register" exact={true} component={Register} />
                <Route path="/profile" exact={true} component={Profile} />
                <Route path="/incident/new" exact={true} component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}