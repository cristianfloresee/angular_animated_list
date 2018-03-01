import { Component } from '@angular/core';
import { TransitionGroupComponent, TransitionGroupItemDirective } from './transition-group/transition-group.component';

declare let _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
