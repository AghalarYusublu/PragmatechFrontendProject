import React from "react";
import { createContext, useState } from "react";
import { useRef } from "react";
import './App.css';


import SDK from "./components/ApiFolder/Sdk";
//Components
import Home from './components/Home';
import Header from './components/Header';
import CreateList from "./components/CreateList";
import CategoryEdit from "./components/CategoryEdit";
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




export const DarkMode = createContext({});
export const SearchItem = createContext({})

function App() {

  const [darkMode, setDarkMode] = useState(false)


  const [inputValue, setInputValue] = useState('')

  const [loading, setLoading] = useState(false)

  const [searchResults, setSearchResults] = useState([])
  const sdk = new SDK();
  const prevController = useRef()

  const [currentIndex, setCurrentIndex] = useState(1)





  const handleChange = async (isInfinity = false) => {
    if (inputValue) {
      try {
        const controller = new AbortController();

        if (prevController.current) {
          prevController.current.abort()
        }

        prevController.current = controller;
        setLoading(true)
        const data = await sdk.getSearch(inputValue, { abortSignal: controller.signal, page: currentIndex })
        if (isInfinity) {
          setSearchResults([...searchResults, ...data.results.filter(w => w.media_type !== "person" && w.backdrop_path)])
        }
        else {
          setSearchResults(data.results.filter(w => w.media_type !== "person" && w.backdrop_path))
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    else {
      setLoading(false)
      setSearchResults([])
    }

  }



  return (
    <>
      <Router>
        <DarkMode.Provider value={{
          darkMode,
          setDarkMode
        }}>
          <SearchItem.Provider value={{
            handleChange,
            inputValue,
            setInputValue,
            loading,
            searchResults,
            currentIndex,
            setCurrentIndex

          }}>
            <div className='app' style={{ background: darkMode ? 'rgb(20, 20, 20)' : 'rgb(229, 229, 229)' }}>
              <div className="container">
                <Header></Header>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/createList" exact>
                    <CreateList />
                  </Route>
                  <Route path="/categoryNameEdit" exact>
                    <CategoryEdit />
                  </Route>
                  <Route path="/register" exact>
                    <Register />
                  </Route>
                  <Route path="/singlePost/:type/:id" exact>
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
          </SearchItem.Provider>
        </DarkMode.Provider>
      </Router>
    </>
  );
}

export default App;
