import React from 'react';
import { ClassGameBoard } from './ClassGameBoard';
import { ClassScoreBoard } from './ClassScoreBoard';
import { ClassFinalScore } from './ClassFinalScore';

interface State {
  correctCount: number;
  incorrectCount: number;
  totalCount: number;
  fishNames: string[];
}

//! Here's a drinking game: take a shot every time you see the word "this" in this project. I'll be starting after I submit this project ;)

export class ClassApp extends React.Component<void, State> {
  constructor(props: void) {
    super(props);
    this.state = {
      correctCount: 0,
      incorrectCount: 0,
      totalCount: 0,
      fishNames: ['trout', 'salmon', 'tuna', 'shark'],
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

  incrementTotalCount = () => {
    this.setState((prevState) => ({ totalCount: prevState.totalCount + 1 }));
  };

  removeFishName = (name: string) => {
    this.setState((prevState) => ({
      fishNames: prevState.fishNames.filter((fishName) => fishName !== name),
    }));
  };

  render() {
    const { correctCount, incorrectCount, totalCount, fishNames } = this.state;

    return (
      <>
        {fishNames.length > 0 ? (
          <>
            <ClassScoreBoard
              correctCount={correctCount}
              incorrectCount={incorrectCount}
              fishNames={fishNames}
            />
            <ClassGameBoard
              incrementCorrectCount={this.incrementCorrectCount}
              incrementIncorrectCount={this.incrementIncorrectCount}
              incrementTotalCount={this.incrementTotalCount}
              removeFish={this.removeFishName}
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
