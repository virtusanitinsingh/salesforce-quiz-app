import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz.service';
import { QuizTest } from '../../models/quiz.model';
import { practiceTest1, practiceTest2 } from '../../data/quiz-data';

@Component({
  selector: 'app-test-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-selection.component.html',
  styleUrls: ['./test-selection.component.scss']
})
export class TestSelectionComponent implements OnInit {
  @Output() testSelected = new EventEmitter<QuizTest>();
  
  tests: QuizTest[] = [];
  hoveredTestId: string | null = null;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.tests = [practiceTest1, practiceTest2];
    this.quizService.setQuizzes(this.tests);
  }

  selectTest(test: QuizTest): void {
    this.testSelected.emit(test);
  }

  onMouseEnter(testId: string): void {
    this.hoveredTestId = testId;
  }

  onMouseLeave(): void {
    this.hoveredTestId = null;
  }
}
