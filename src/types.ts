export interface GameBoardProps {
    incrementCorrectCount: () => void;
    incrementIncorrectCount: () => void;
    incrementTotalCount: () => void;
    removeFish: (name: string) => void;
}

export interface ScoreProps {
    correctCount: number;
    incorrectCount: number;
    fishNames: string[];
}

export interface FinalScoreProps {
    correctCount: number;
    totalCount: number;
}