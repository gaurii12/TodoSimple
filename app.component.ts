import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoformComponent } from './todoform/todoform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todoproject';
}
