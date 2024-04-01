import styles from "./PlayerDisplay.module.css";
import GameButton from "./GameButton";
import Message from "./Message";

export default function PlayerDisplay({ playerChoice, computerChoice, choiceOBJ }) {

  const buttons = ["Snake", "Water", "Gun"];
  return (
    <> 
      <div className={styles.container}>
        <h1>Player Display</h1>
        {buttons.map(btn => <GameButton btn={btn} playerChoice={playerChoice} key={btn} buttons={buttons} computerChoice={computerChoice}></GameButton>)}
        <Message choiceOBJ={choiceOBJ}></Message>
      </div>
    </>
  );
}