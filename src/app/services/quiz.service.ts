import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { QuizTest, QuizProgress, UserAnswer, QuizStatistics } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizzes: QuizTest[] = [];
  private currentProgress$ = new BehaviorSubject<QuizProgress | null>(null);
  private statistics$ = new BehaviorSubject<QuizStatistics | null>(null);

  constructor() {
    this.loadQuizzes();
  }

  private loadQuizzes(): void {
    // This will be loaded dynamically from JSON files
    this.quizzes = [];
  }

  setQuizzes(quizzes: QuizTest[]): void {
    this.quizzes = quizzes;
  }

  getQuizzes(): Observable<QuizTest[]> {
    return new Observable(observer => {
      observer.next(this.quizzes);
      observer.complete();
    });
  }

  getQuizById(id: string): QuizTest | undefined {
    return this.quizzes.find(q => q.id === id);
  }

  startQuiz(testId: string): void {
    const quiz = this.getQuizById(testId);
    if (quiz) {
      const progress: QuizProgress = {
        testId,
        totalQuestions: quiz.totalQuestions,
        answeredQuestions: 0,
        correctAnswers: 0,
        currentQuestionIndex: 0,
        userAnswers: [],
        startTime: new Date()
      };
      this.currentProgress$.next(progress);
    }
  }

  getCurrentProgress(): Observable<QuizProgress | null> {
    return this.currentProgress$.asObservable();
  }

  recordAnswer(answer: UserAnswer): void {
    const progress = this.currentProgress$.value;
    if (progress) {
      progress.userAnswers.push(answer);
      progress.answeredQuestions++;
      if (answer.isCorrect) {
        progress.correctAnswers++;
      }
      this.currentProgress$.next({ ...progress });
    }
  }

  nextQuestion(): void {
    const progress = this.currentProgress$.value;
    if (progress && progress.currentQuestionIndex < progress.totalQuestions - 1) {
      progress.currentQuestionIndex++;
      this.currentProgress$.next({ ...progress });
    }
  }

  previousQuestion(): void {
    const progress = this.currentProgress$.value;
    if (progress && progress.currentQuestionIndex > 0) {
      progress.currentQuestionIndex--;
      this.currentProgress$.next({ ...progress });
    }
  }

  finishQuiz(): void {
    const progress = this.currentProgress$.value;
    if (progress) {
      progress.endTime = new Date();
      const timeSpent = progress.endTime.getTime() - progress.startTime.getTime();
      const accuracy = (progress.correctAnswers / progress.totalQuestions) * 100;

      const statistics: QuizStatistics = {
        testId: progress.testId,
        testTitle: this.getQuizById(progress.testId)?.title || 'Quiz',
        totalQuestions: progress.totalQuestions,
        correctAnswers: progress.correctAnswers,
        incorrectAnswers: progress.totalQuestions - progress.correctAnswers,
        accuracy,
        timeSpent,
        questionsReviewed: this.getReviewQuestions(progress)
      };

      this.statistics$.next(statistics);
      this.currentProgress$.next(null);
    }
  }

  private getReviewQuestions(progress: QuizProgress): any[] {
    const quiz = this.getQuizById(progress.testId);
    if (!quiz) return [];

    return progress.userAnswers.map(ua => ({
      ...quiz.questions.find(q => q.id === ua.questionId),
      userAnswer: ua.selectedAnswer,
      isCorrect: ua.isCorrect
    }));
  }

  getStatistics(): Observable<QuizStatistics | null> {
    return this.statistics$.asObservable();
  }

  resetQuiz(): void {
    this.currentProgress$.next(null);
    this.statistics$.next(null);
  }

  skipQuestion(): void {
    this.nextQuestion();
  }

  getCurrentQuestionIndex(): Observable<number> {
    return new Observable(observer => {
      this.currentProgress$.subscribe(progress => {
        observer.next(progress?.currentQuestionIndex || 0);
      });
    });
  }

  getProgressPercentage(): Observable<number> {
    return new Observable(observer => {
      this.currentProgress$.subscribe(progress => {
        if (progress) {
          const percentage = (progress.answeredQuestions / progress.totalQuestions) * 100;
          observer.next(percentage);
        } else {
          observer.next(0);
        }
      });
    });
  }
}
