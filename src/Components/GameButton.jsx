import styles from "./GameButton.module.css";

export default function GameButton({ btn, playerChoice, buttons, computerChoice }) {
  /** Button text comming as props */

  function handlePlayersChoices(btn) {
    playerChoice(btn); /** Player choice */
    const computer = () => buttons[Math.floor(Math.random() * 3)];
    computerChoice(computer());
  }

  return (
    <>
      <div className={styles.btnContainer}>
        <button onClick={() => handlePlayersChoices(btn)}>{btn}</button>
      </div>
    </>
  );  
} 