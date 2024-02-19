import { Component } from '@angular/core';

interface Task {
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly tasks: Task[] = [
    {
      title: 'Change the wording',
      isCompleted: false,
    },
  ];
}
