import { Component } from 'react';
import './styles/score-board.css';
import { ScoreProps } from '../../types';

export class ClassScoreBoard extends Component<ScoreProps> {
  render() {
    const { correctCount, incorrectCount, fishNames } = this.props;

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {fishNames.map((answer) => (
            <div
              key={answer}
              className="choice"
            >
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
