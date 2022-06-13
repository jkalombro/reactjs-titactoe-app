import React from 'react';
import './themes/css/App.css';

//component imports
import Tictactoe from './components/Tictactoe';
import PlayerScores from './components/PlayerScores';
import Instructions from './components/Instructions';

const App = () => {
  return (
    <main className="App">
      <header className="App-header">
        <p>
          TIC-TAC-TOE GAME
        </p>
      </header>
      <section className="main-container">
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
      </section>
    </main>
  );
}

export default App;
