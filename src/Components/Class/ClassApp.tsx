import React from 'react';
import { ClassGameBoard } from './ClassGameBoard';
import { ClassScoreBoard } from './ClassScoreBoard';
import { ClassFinalScore } from './ClassFinalScore';
import { fishData } from '../../data/data';

interface State {
  correctCount: number;
  incorrectCount: number;
}

export class ClassApp extends React.Component<void, State> {
  constructor(props: void) {
    super(props);
    this.state = {
      correctCount: 0,
      incorrectCount: 0,
    };
  }

  incrementCorrectCount = () => {
    this.setState((prevState) => ({
      correctCount: prevState.correctCount + 1,
    }));
  };

  incrementIncorrectCount = () => {
    this.setState((prevState) => ({
      incorrectCount: prevState.incorrectCount + 1,
    }));
  };

  render() {
    const { correctCount, incorrectCount } = this.state;
    const totalCount = correctCount + incorrectCount;

    const fishNames = fishData.map((fish) => fish.name).splice(totalCount);
    const currentFishIndex = totalCount;

    return (
      <>
        {totalCount < fishData.length ? (
          <>
            <ClassScoreBoard
              correctCount={correctCount}
              incorrectCount={incorrectCount}
              fishNames={fishNames}
            />
            <ClassGameBoard
              incrementCorrectCount={this.incrementCorrectCount}
              incrementIncorrectCount={this.incrementIncorrectCount}
              currentFishData={fishData[currentFishIndex]}
            />
          </>
        ) : (
          <ClassFinalScore
            correctCount={correctCount}
            totalCount={totalCount}
          />
        )}
      </>
    );
  }
}
