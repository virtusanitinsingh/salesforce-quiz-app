import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz.service';
import { QuizStatistics } from '../../models/quiz.model';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Output() returnToSelection = new EventEmitter<void>();

  statistics: QuizStatistics | null = null;
  performanceLevel: string = '';

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getStatistics().subscribe(stats => {
      this.statistics = stats;
      if (stats) {
        this.determinePerformanceLevel(stats.accuracy);
      }
    });
  }

  determinePerformanceLevel(accuracy: number): void {
    if (accuracy >= 90) {
      this.performanceLevel = 'Outstanding';
    } else if (accuracy >= 80) {
      this.performanceLevel = 'Excellent';
    } else if (accuracy >= 70) {
      this.performanceLevel = 'Good';
    } else if (accuracy >= 60) {
      this.performanceLevel = 'Average';
    } else {
      this.performanceLevel = 'Need Improvement';
    }
  }

  getPerformanceIcon(): string {
    if (this.statistics!.accuracy >= 80) {
      return '🎉';
    } else if (this.statistics!.accuracy >= 60) {
      return '👍';
    } else {
      return '💪';
    }
  }

  formatTime(milliseconds: number): string {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  }

  retryQuiz(): void {
    this.returnToSelection.emit();
  }
}
