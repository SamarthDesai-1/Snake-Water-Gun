import { useState } from 'react';
import './App.css';
import PlayerDisplay from './Components/PlayerDisplay';

function App() {

  const [player, setPlayer] = useState("");
  const [computer, setComputer] = useState("");

  function playerChoice(choice) {
    setPlayer(choice);
  }
  function computerChoice(choice) {
    setComputer(choice);
  }

  return (
    <>
      <PlayerDisplay playerChoice={playerChoice} computerChoice={computerChoice} choiceOBJ={{ player, computer }}></PlayerDisplay>
    </>
  )
}

export default App;
