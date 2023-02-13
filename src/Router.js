import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Connexion, Inscription } from './pages/connexionInscription';
import ErrorPage from './pages/pageError';
import Accueil from './pages/pageAccueil';
const App = () => {
    return (
      <Switch>
        {/* Add your routes here */}
        <Route component={Connexion} />
        <Route component={Accueil} />
        <Route component={Inscription} />
        <Route component={ErrorPage} />
      </Switch>
    );
  };