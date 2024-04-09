import { useState } from 'react';
import { FunctionalGameBoard } from './FunctionalGameBoard';
import { FunctionalScoreBoard } from './FunctionalScoreBoard';
import { FunctionalFinalScore } from './FunctionalFinalScore';

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [fishNames, setFishNames] = useState([
    'trout',
    'salmon',
    'tuna',
    'shark',
  ]);

  const incrementCorrectCount = () => setCorrectCount(correctCount + 1);
  const incrementIncorrectCount = () => setIncorrectCount(incorrectCount + 1);
  const incrementTotalCount = () => setTotalCount(totalCount + 1);
  const removeFishName = (name: string) => {
    setFishNames(fishNames.filter((fishName) => fishName !== name));
  };

  return (
    <>
      {fishNames.length > 0 ? (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            fishNames={fishNames}
          />
          <FunctionalGameBoard
            incrementCorrectCount={incrementCorrectCount}
            incrementTotalCount={incrementTotalCount}
            incrementIncorrectCount={incrementIncorrectCount}
            removeFish={removeFishName}
          />
        </>
      ) : (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={totalCount}
        />
      )}
    </>
  );
}
