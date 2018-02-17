import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './modules/routes';
import HomeContainer from './containers/home-container';

const App = () =>
    <div>
      <HomeContainer />
        { Routes }
    </div>;

export default App;