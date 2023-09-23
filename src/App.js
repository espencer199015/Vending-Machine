import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VendingMachine from './components/VendingMachine';
import Snack1 from './components/Snack1';
import Snack2 from './components/Snack2';
import Snack3 from './components/Snack3';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={VendingMachine} />
          <Route path="/snack/1" component={Snack1} />
          <Route path="/snack/2" component={Snack2} />
          <Route path="/snack/3" component={Snack3} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;