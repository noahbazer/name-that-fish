import { useState } from 'react';
import { FunctionalGameBoard } from './FunctionalGameBoard';
import { FunctionalScoreBoard } from './FunctionalScoreBoard';
import { FunctionalFinalScore } from './FunctionalFinalScore';
import { fishData } from '../../data/data';

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const totalCount = correctCount + incorrectCount;

  const fishNames = fishData.map((fish) => fish.name).splice(totalCount);
  const currentFishIndex = totalCount;

  const isGameOver = totalCount >= fishData.length;

  const incrementCorrectCount = () => setCorrectCount(correctCount + 1);
  const incrementIncorrectCount = () => setIncorrectCount(incorrectCount + 1);

  return (
    <>
      {!isGameOver && (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            fishNames={fishNames}
          />
          <FunctionalGameBoard
            incrementCorrectCount={incrementCorrectCount}
            incrementIncorrectCount={incrementIncorrectCount}
            currentFishData={fishData[currentFishIndex]}
          />
        </>
      )}
      {isGameOver && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={fishData.length}
        />
      )}
    </>
  );
}
