import { Component, OnInit } from '@angular/core';
import { setTimeout, setInterval } from 'timers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  items = [
    { data: [20], label: 'Arica' },
    { data: [23], label: 'Iquique' },
    { data: [27], label: 'Pica' },
    { data: [34], label: 'Chopiri' },
  ];

  shuffle() {
    for (var i = this.items.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.items[i];
      this.items[i] = this.items[j];
      this.items[j] = temp;
    }

  }
}
