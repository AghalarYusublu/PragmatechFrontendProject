import React from "react";
import './App.css';
//Components
import Home from './components/Home';
import Header from './components/Header';
import Footer from "./components/Footer";
import Register from './components/Registration/Register';
import SinglePost from "./components/Movies/SinglePost";
import RegisterStep2 from "./components/Registration/RegisterStep2";
import RegisterStep3 from "./components/Registration/RegisterStep3";
import RegisterFinish from "./components/Registration/RegisterFinish";

//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <div className="container">
            <Header></Header>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/register" exact>
                <Register />
              </Route>
              <Route path="/singlePost" exact>
                <SinglePost />
              </Route>
              <Route path="/registerStep-2" exact>
                <RegisterStep2 />
              </Route>
              <Route path="/registerStep-3" exact>
                <RegisterStep3 />
              </Route>
              <Route path="/register-finish" exact>
                <RegisterFinish />
              </Route>
            </Switch>
            <Footer></Footer>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
