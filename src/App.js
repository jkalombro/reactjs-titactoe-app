import React, { useEffect } from "react";
import "./themes/css/App.css";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux';
import { FIRE_ALERT } from './store/actions/types';

//component imports
import Tictactoe from "./components/Tictactoe";
import PlayerScores from "./components/PlayerScores";
import Instructions from "./components/Instructions";

const App = () => {
  const alertMessage = useSelector(state => state.game.alert_message);
  const dispatch = useDispatch();

  const alert = () => toast.warn(alertMessage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'dark',
    onClose: dispatch({ type: FIRE_ALERT, payload: ""})
    });;

  useEffect(() => {
    alertMessage && alert();
  }, [alertMessage]);

  return (
    <div className="App">
      <header className="App-header">
        <p>TIC-TAC-TOE GAME</p>
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

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
};

export default App;
