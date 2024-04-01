export default function Message({ choiceOBJ }) {

  function winner() {
    if (choiceOBJ.player === 'Snake' || choiceOBJ.computer === 'Water') {
      return "Player win";
    }
    else if (choiceOBJ.player === 'Snake' || choiceOBJ.computer === 'Gun') {
      return "Computer win";
    }
    else if (choiceOBJ.player === 'Gun' || choiceOBJ.computer === 'Water') {
      return "Player win";
    }
  }
  return (
    <>
      {choiceOBJ.player === '' && choiceOBJ.computer === '' ? <h2>Start Playing</h2> : winner()}
    </>
  );
}