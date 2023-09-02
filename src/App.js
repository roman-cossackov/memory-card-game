import { useState } from "react";
import { shuffle } from "lodash";

import "./App.css";
import Images from "./components/Images";

function App() {
  const [cards, setCards] = useState(shuffle([...Images, ...Images]));

  const flipCardHandler = (index) => {

  }

  return (
    <div>
      <div className="board">
        {cards.map((card, index) => (
          <div className="card-outer" onFlipCard={flipCardHandler}>
            <div className="card">
              <div className="front">
                <img src={card} alt="" />
              </div>
              <div className="back"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
