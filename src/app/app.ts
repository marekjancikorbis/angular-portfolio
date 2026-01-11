import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppComponent} from './carusel/carusel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('untitled5');
}
