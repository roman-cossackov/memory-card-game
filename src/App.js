import { useState } from "react";
import { shuffle } from "lodash";

import "./App.css";
import Images from "./components/Images";
import WinAlert from "./components/WinAlert/WInAlert";
import sound1 from "./assets/click_sound.wav";
import sound2 from "./assets/right_sound.mp3";
import sound3 from "./assets/win_sound.wav";

function App() {
  const [cards, setCards] = useState(shuffle([...Images, ...Images]));
  const [activeCards, setActiveCards] = useState([]);
  const [foundMatches, setFoundMatches] = useState([]);
  const [clicks, setClicks] = useState(0);
  const [wonAlert, setWonAlert] = useState(false);

  const flipCard = async (index) => {
    playClick();
    if (!activeCards.includes(index)){
      if (activeCards.length === 0) {
      setActiveCards([index]);
    };

    const delay = ms => {
      return new Promise (res => res, ms)
    }

    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondIndex = index;
      

      if (cards[firstIndex] === cards[secondIndex]) {
        playRight();
        if (foundMatches.length + 2 === cards.length) {
          playWin();
          setWonAlert(true);
        };

        setFoundMatches(prev => [...prev, firstIndex, secondIndex]) 
      } else {

      };
      setActiveCards(prev => [...prev, index])
    };

    if (activeCards.length === 2) {
      await delay(3000)
      setActiveCards([])
    }
    setClicks(prev => prev + 1)
  }
  };

  const playClick = () => {
    new Audio(sound1).play()
  }

  const playRight = () => {
    new Audio(sound2).play()
  }

  const playWin = () => {
    new Audio(sound3).play()
  }
    
  const resetCards = () => {
    setCards(shuffle([...Images, ...Images]));
    setActiveCards([]);
    setFoundMatches([]);
    setClicks(0);
    setWonAlert(false)
  };
  return (
    <div>
      <div className="board">
        {cards.map((card, index) => {
          const flippedToFront = (activeCards.indexOf(index) !== -1) || (foundMatches.indexOf(index) !== -1)
          return (
            <div className={"card-outer " + (flippedToFront ? "flipped" : '')} onClick={() => flipCard(index)}>
              <div className={"card"}>
                <div className="front">
                <img src={card} alt="" />
                </div>
                <div className="back"></div>
              </div>
            </div>)
        })}
        <div className="clicks">
        Clicks:{clicks}
      </div>
      </div>
      <button className="resetButton" onClick={resetCards}>RESET</button>
      <button onClick={() => {setWonAlert(prev => !prev)}}>SET WON(test)</button>
      {wonAlert && <WinAlert onCloseWonAlert={() => setWonAlert(false)} onResetGame={resetCards}/>}
    </div>
  );
}

export default App;
