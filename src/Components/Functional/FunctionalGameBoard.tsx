import './styles/game-board.css';
import { Images } from '../../assets/Images';
import { useState } from 'react';
import React from 'react';
import { GameBoardProps } from '../../types';

interface Fish {
  name: string;
  url: string;
}

//TODO: make the initialFishes a prop passed from parent instead of a separate, component-local variable (don't forget to do this oh my god)

const initialFishes: Fish[] = [
  {
    name: 'trout',
    url: Images.trout,
  },
  {
    name: 'salmon',
    url: Images.salmon,
  },
  {
    name: 'tuna',
    url: Images.tuna,
  },
  {
    name: 'shark',
    url: Images.shark,
  },
];

export function FunctionalGameBoard({
  incrementCorrectCount,
  incrementTotalCount,
  incrementIncorrectCount,
  removeFish,
}: GameBoardProps) {
  const [input, setInput] = useState('');
  const [fishIndex, setFishIndex] = useState(0);
  const nextFishToName = initialFishes[fishIndex];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleNextFish = () => {
    removeFish(nextFishToName.name);
    setFishIndex(fishIndex + 1);
    setInput('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    input === nextFishToName.name
      ? incrementCorrectCount()
      : incrementIncorrectCount();
    incrementTotalCount();
    handleNextFish();
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img
          src={nextFishToName.url}
          alt={nextFishToName.name}
        />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={input}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
