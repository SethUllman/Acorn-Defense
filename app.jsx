import React from 'react';
import { Route, Switch } from "react-router-dom";
import Splash from './lib/components/splash';

const App = () => {
  return (
    <Switch>
      {/* <Route path='/' component={Splash} /> */}
      <Splash/>
    </Switch>
  )
};

export default App;
