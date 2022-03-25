import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Home } from './Views/Home';
import Players from './Views/Players';
import Header from './Views/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/teams" /> */}
        {/* <Route path="/teams/:id" /> */}
        <Route exact path="/players">
          <Players />
        </Route>
        {/* <Route path="/players/:id" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
