import './styles/game-board.css';
import { useState } from 'react';
import React from 'react';
import { GameBoardProps } from '../../types';

export function FunctionalGameBoard({
  incrementCorrectCount,
  incrementIncorrectCount,
  currentFishData,
}: GameBoardProps) {
  const [input, setInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleNextFish = () => {
    setInput('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    input === currentFishData.name
      ? incrementCorrectCount()
      : incrementIncorrectCount();
    handleNextFish();
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img
          src={currentFishData.url}
          alt={currentFishData.name}
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
