import { Routes } from '@angular/router';
import { QuizContainerComponent } from './components/quiz-container/quiz-container.component';

export const routes: Routes = [
  {
    path: '',
    component: QuizContainerComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
