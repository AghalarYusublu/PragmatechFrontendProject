import './App.css';
import Randomİmage from './components/Randomİmage';
import Covidİnfo from './components/Covidİnfo';
import QrCode from './components/QrCode';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Header></Header>
        </div>
        <Switch>
          <Route path="/covidInfo" exact>
            <Covidİnfo />
          </Route>
          <Route path="/randomImage" exact>
            <Randomİmage />
          </Route>
          <Route path="/qrCode" exact>
            <QrCode />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
