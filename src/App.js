import React, { useState } from 'react';

import Main from './screens/main/main';
import Checkout from './screens/checkout/checkout'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/src/screens/main/main'>
          <Main />
        </Route>
        <Route exact path='/src/screens/checkout/checkout'>
          <Checkout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
