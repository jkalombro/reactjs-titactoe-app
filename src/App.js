import React, { Component } from 'react';
import './themes/css/App.css';
import { Provider } from 'react-redux';
import store from './store';

//component imports
import Tictactoe from './components/Tictactoe';
import PlayerScores from './components/PlayerScores';
import Instructions from './components/Instructions';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <p>
              TIC-TAC-TOE GAME
            </p>
          </header>
          <div className="main-container">
            <div className="app-box-1">
              <h1>SCORES</h1>
              <PlayerScores />
            </div>
            <div className="app-box-2">
              <Tictactoe />
            </div>
            <div className="app-box-3">
              <Instructions />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
