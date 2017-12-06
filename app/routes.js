import React from 'react';
import {Route} from 'react-router';
import App from './component/App';
import Index from './component/Index';
import Recomend from './component/Recomend';
import Individual from './component/Individual';

export default (
  <Route handler={App}>
    <Route path='/index/recommend' handler={Recomend} />
	<Route path='/' handler={Index} />
	<Route path='/index/individual' handler={Individual} />
  </Route>
);