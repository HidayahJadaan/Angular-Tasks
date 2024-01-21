import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('My Name Is Hidayah'),
  ];
  title = 'Wish List App';

  constructor() {
    console.log(this.items);
  }
}
