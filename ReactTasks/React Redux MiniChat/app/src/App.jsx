import './App.css';
import Player1 from './components/Player1'
import Player2 from './components/Player2'
import { useSelector } from 'react-redux';



//Router
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
function App() {



  const messageP2Count = useSelector((state) => state.player2message.messageCount)
  const messageP1Count = useSelector((state) => state.player1message.messageCount)



  return <>
    <Router>
      <div className="App">
        <div className="container">
          <div className="navbar h-20 bg-blue-300 flex justify-center items-center">
          <small className='text-white bg-green-700 rounded-full  py-1 px-2' >{messageP1Count}</small>

            <div className="ul flex">
              <li className='list-none mx-3 bg-red-500 text-2xl rounded-xl p-2'><Link to='/player-1' >Player 1 Page</Link></li>
              <li className='list-none mx-3 bg-red-500 text-2xl  rounded-xl p-2' ><Link to='/player-2' >Player 2 Page</Link></li>
            </div>

            <small className='text-white bg-green-700 rounded-full  py-1 px-2' >{messageP2Count}</small>
          </div>
          <Switch>
            <Route path="/player-1" exact>
              <Player1 />
            </Route>
            <Route path="/player-2" exact>
              <Player2 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  </>
}
export default App;
