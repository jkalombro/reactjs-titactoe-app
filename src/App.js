import React from 'react';
import './themes/css/App.css';

//component imports
import Tictactoe from './components/Tictactoe';
import PlayerScores from './components/PlayerScores';
import Instructions from './components/Instructions';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          TIC-TAC-TOE GAME
        </p>
      </header>
      <main className="main-container">
        <section className="app-box-1">
          <h1>SCORES</h1>
          <PlayerScores />
        </section>
        <section className="app-box-2">
          <Tictactoe />
        </section>
        <section className="app-box-3">
          <Instructions />
        </section>
      </main>
    </div>
  );
}

export default App;
