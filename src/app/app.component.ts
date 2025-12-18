import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizContainerComponent } from './components/quiz-container/quiz-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, QuizContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Salesforce Agentforce Quiz';
}
