import './styles/score-board.css';
import { ScoreProps } from '../../types';

export function FunctionalScoreBoard({
  correctCount,
  incorrectCount,
  fishNames,
}: ScoreProps) {
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
