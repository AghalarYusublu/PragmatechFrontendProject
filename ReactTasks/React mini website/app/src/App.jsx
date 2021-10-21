import { useState, createContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Layout from "./components/Layout";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const DarkMode = createContext({});

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <Router>
        <DarkMode.Provider value={{
          darkMode,
          setDarkMode
        }}>
          <div>
            <Navbar >
            </Navbar>
            <div className="App h-screen text-red-600 text-lg text-center" style={{ background: darkMode ? ' rgb(43, 43, 43)' : 'white' }}>
              <Layout>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/about" exact>
                    <About />
                  </Route> <Route path="/team/:name" exact>
                    <Team />
                  </Route>
                </Switch>
              </Layout>
            </div>
          </div>
        </DarkMode.Provider>
      </Router>
    </>
  );
}

export default App;
