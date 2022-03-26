import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Home } from './Views/Home';
import Players from './Views/Players/Players';
import Header from './Views/Header';
import Teams from './Views/Teams/Teams';
import Player from './Views/Players/Player';
import Team from './Views/Teams/Team';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/teams">
          <Teams />
        </Route>
        <Route path="/teams/:id">
          <Team />
        </Route>
        <Route exact path="/players">
          <Players />
        </Route>
        <Route path="/players/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
