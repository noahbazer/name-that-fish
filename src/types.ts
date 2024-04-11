export interface GameBoardProps {
    incrementCorrectCount: () => void;
    incrementIncorrectCount: () => void;
    currentFishData: Fish;
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

export interface Fish {
    name: string;
    url: string;
}