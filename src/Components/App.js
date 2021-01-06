import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './NavigationBar';
import Home from './Home';
import Missions from './Missions';
import Mercs from './Mercs';
import Jobs from './Jobs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/mercs">
            <Mercs />
          </Route>
          <Route path="/guns"></Route>
          <Route path="/jobs">
            <Jobs />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
