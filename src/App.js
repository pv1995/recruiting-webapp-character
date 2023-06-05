/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import Character from "./components/Character";
import { SINGLE_CHARACTER } from "./consts";
import { isNotValid, isBarbarian, isBard, isWizard } from "./helper";

function App() {
  const [game, setGame] = useState({
    characters: [],
    current_character: null,
    current_roll: null,
    roll_history: [],
  });

  function addCharacter() {
    setGame({
      ...game,
      characters: [
        ...game.characters,
        JSON.parse(JSON.stringify(SINGLE_CHARACTER)),
      ],
    });
  }

  useEffect(() => {
    fetch(
      "https://recruiting.verylongdomaintotestwith.ca/api/{pv1995}/character"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  function resetCharacter() {
    const currentGameChars = game.characters;
    const newGameChars = [];
    currentGameChars.forEach(() =>
      newGameChars.push(JSON.parse(JSON.stringify(SINGLE_CHARACTER)))
    );
    updateGame(newGameChars);
  }
  function saveCharacter() {
    fetch(
      "https://recruiting.verylongdomaintotestwith.ca/api/{pv1995}/character",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(game),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function checkAndUpdateModifier(attr_key, index) {
    const attr_val = game.characters[index].attributes[attr_key].attribute;
    const init_modifier = game.characters[index].attributes[attr_key].modifier;
    if (attr_val >= 10 && attr_val % 2 === 0) {
      return (attr_val - 10) / 2;
    } else if (attr_val < 10 && attr_val % 2 === 0) {
      return (attr_val - 10) / 2;
    }
    return init_modifier;
  }

  function updateACharacterAttrs(key, index, type) {
    const newArray = Array.from(game.characters);
    type === "add"
      ? newArray[index].attributes[key].attribute++
      : newArray[index].attributes[key].attribute--;
    newArray[index].attributes[key].modifier = checkAndUpdateModifier(
      key,
      index
    );
    newArray[index].isModifyAllowed = !isNotValid(
      game.characters[index].attributes
    );
    newArray[index].classes = {
      barbarian: isBarbarian(game.characters[index].attributes),
      wizard: isWizard(game.characters[index].attributes),
      bard: isBard(game.characters[index].attributes),
    };
    updateGame(newArray);
  }

  function updateGame(characters) {
    setGame({
      ...game,
      characters: [...characters],
    });
  }

  return (
    <>
      <div className="App">
        <section className="App-section">
          <header className="App-header">
            <h1>React Coding Exercise</h1>
          </header>
          <div className="game-btns">
            <button className="add-char" onClick={resetCharacter}>
              RESET CHARACTERS
            </button>

            <button className="add-char" onClick={addCharacter}>
              ADD CHARACTER
            </button>

            <button className="add-char" onClick={saveCharacter}>
              SAVE CHARACTERS
            </button>
          </div>
          <div>
            {game.characters.map((character, index) => (
              <Character
                key={index}
                data={character}
                index={index}
                updateACharacterAttrs={updateACharacterAttrs}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
