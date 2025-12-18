import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QuizService } from '../../services/quiz.service';
import { QuizTest, QuizProgress } from '../../models/quiz.model';
import { TestSelectionComponent } from '../test-selection/test-selection.component';
import { QuizCardComponent } from '../quiz-card/quiz-card.component';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-quiz-container',
  standalone: true,
  imports: [CommonModule, TestSelectionComponent, QuizCardComponent, ResultsComponent],
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.scss']
})
export class QuizContainerComponent implements OnInit, OnDestroy {
  currentView: 'selection' | 'quiz' | 'results' = 'selection';
  currentProgress: QuizProgress | null = null;
  private destroy$ = new Subject<void>();

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getCurrentProgress()
      .pipe(takeUntil(this.destroy$))
      .subscribe(progress => {
        this.currentProgress = progress;
        if (progress) {
          this.currentView = 'quiz';
        }
      });
  }

  onTestSelected(test: QuizTest): void {
    this.quizService.startQuiz(test.id);
  }

  onQuizFinished(): void {
    this.currentView = 'results';
  }

  onReturnToSelection(): void {
    this.quizService.resetQuiz();
    this.currentView = 'selection';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
