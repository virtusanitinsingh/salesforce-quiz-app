import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { QuizService } from '../../services/quiz.service';
import { QuizProgress, Question } from '../../models/quiz.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
      ])
    ]),
    trigger('optionAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class QuizCardComponent implements OnInit, OnDestroy {
  @Input() progress!: QuizProgress;
  @Output() quizFinished = new EventEmitter<void>();

  currentQuestion: Question | null = null;
  selectedAnswer: string | null = null;
  showFeedback = false;
  progressPercentage = 0;
  currentQuiz: any;
  animationKey = 0;
  private destroy$ = new Subject<void>();
  private questionStartTime = 0;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.loadCurrentQuestion();
    this.updateProgressPercentage();
    this.questionStartTime = Date.now();
  }

  loadCurrentQuestion(): void {
    const quiz = this.quizService.getQuizById(this.progress.testId);
    if (quiz) {
      this.currentQuiz = quiz;
      this.currentQuestion = quiz.questions[this.progress.currentQuestionIndex];
      this.selectedAnswer = null;
      this.showFeedback = false;
      this.animationKey++;
      this.questionStartTime = Date.now();
    }
  }

  selectAnswer(option: string): void {
    if (!this.showFeedback) {
      this.selectedAnswer = option;
    }
  }

  submitAnswer(): void {
    if (!this.selectedAnswer || !this.currentQuestion) return;

    const isCorrect = this.selectedAnswer === this.currentQuestion.correctAnswer;
    const timeSpent = (Date.now() - this.questionStartTime) / 1000;

    this.quizService.recordAnswer({
      questionId: this.currentQuestion.id,
      selectedAnswer: this.selectedAnswer,
      isCorrect,
      timeSpent
    });

    this.showFeedback = true;
  }

  nextQuestion(): void {
    if (this.progress.currentQuestionIndex < this.progress.totalQuestions - 1) {
      this.quizService.nextQuestion();
      this.progress = { ...this.progress };
      this.loadCurrentQuestion();
      this.updateProgressPercentage();
    } else {
      this.finishQuiz();
    }
  }

  previousQuestion(): void {
    if (this.progress.currentQuestionIndex > 0) {
      this.quizService.previousQuestion();
      this.progress = { ...this.progress };
      this.loadCurrentQuestion();
      this.updateProgressPercentage();
    }
  }

  skipQuestion(): void {
    this.nextQuestion();
  }

  finishQuiz(): void {
    this.quizService.finishQuiz();
    this.quizFinished.emit();
  }

  updateProgressPercentage(): void {
    this.progressPercentage = ((this.progress.currentQuestionIndex + 1) / this.progress.totalQuestions) * 100;
  }

  getQuestionNumber(): number {
    return this.progress.currentQuestionIndex + 1;
  }

  isAnswered(): boolean {
    return this.showFeedback;
  }

  canSubmit(): boolean {
    return this.selectedAnswer !== null && !this.showFeedback;
  }

  isLastQuestion(): boolean {
    return this.progress.currentQuestionIndex === this.progress.totalQuestions - 1;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
