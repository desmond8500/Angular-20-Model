import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { Header } from './src/header/header';
import { Navbar1 } from './src/navbar1/navbar1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar1,],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Demo1');

  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
