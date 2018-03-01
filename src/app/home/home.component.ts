import { Component, OnInit } from '@angular/core';
import { setTimeout, setInterval } from 'timers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(){
    setInterval(()=>{    //<<<---    using ()=> syntax
      this.shuffle();
 },1000);
  }

  //items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  items = [
    { data: [20], label: 'Arica' },
    { data: [23], label: 'Iquique' },
    { data: [27], label: 'Pica' },
    { data: [34], label: 'Chopiri' },
  ];

  shufflse() {
    //this.items = _.shuffle(this.items)
  }

  shuffle() {
    for (var i = this.items.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.items[i];
        this.items[i] = this.items[j];
        this.items[j] = temp;
    }

  }
}
