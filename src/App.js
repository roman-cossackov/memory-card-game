import { useState } from "react";
import { shuffle } from "lodash";

import "./App.css";
import Images from "./components/Images";
import sound1 from "./assets/click_sound.wav";
import sound2 from "./assets/right_sound.mp3";
import sound3 from "./assets/win_sound.wav";

function App() {
  const [cards, setCards] = useState(shuffle([...Images, ...Images]));
  const [activeCards, setActiveCards] = useState([]);
  const [foundMatches, setFoundMatches] = useState([]);
  const [clicks, setClicks] = useState(0);
  const [won, setWon] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const flipCard = (index) => {
    playClick();
    if (!activeCards.includes(index)){
      if (activeCards.length === 0) {
      setActiveCards([index]);
    };

    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondIndex = index; 

      if (cards[firstIndex] === cards[secondIndex]) {
        playRight();
        if (foundMatches.length + 2 === cards.length) {
          alert("You won!")
          setWon(true)
        }

        setFoundMatches(prev => [...prev, firstIndex, secondIndex]) 
      }
      setActiveCards(prev => [...prev, index])
    }

    if (activeCards.length === 2) {
      setActiveCards([index])
    }}

    setClicks(prev => prev + 1)
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

  const interval = setInterval(() => {

  })

  return (
    // <Card></Card>
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
        {won && (
          <>You won the game! Congratulations!</>
        )}
        Clicks:{clicks}
      </div>
      Timer
      <button>RESET</button>
      </div>
      
    </div>
  );
}

export default App;
