export interface QuizOption {
  key: string;
  value: string;
}

export interface Question {
  id: number;
  question: string;
  options: { [key: string]: string };
  correctAnswer: string;
  explanation: string;
}

export interface QuizTest {
  id: string;
  title: string;
  totalQuestions: number;
  questions: Question[];
}

export interface UserAnswer {
  questionId: number;
  selectedAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
}

export interface QuizProgress {
  testId: string;
  totalQuestions: number;
  answeredQuestions: number;
  correctAnswers: number;
  currentQuestionIndex: number;
  userAnswers: UserAnswer[];
  startTime: Date;
  endTime?: Date;
}

export interface QuizStatistics {
  testId: string;
  testTitle: string;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  accuracy: number;
  timeSpent: number;
  questionsReviewed: Question[];
}
