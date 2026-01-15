import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';

import { Hero } from '@angular-demo/ui';

@Component({
  imports: [NxWelcome, RouterModule, Hero],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-demo';
}
