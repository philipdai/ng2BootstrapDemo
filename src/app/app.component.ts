import { Component } from '@angular/core';
import { Stock } from './models/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  submitted = false;
  newStock = new Stock(0, '', '');

  onSubmit() {
    this.submitted = true;
  }

  cancel() {
    this.submitted = false;
    this.newStock = new Stock(0, '', '');
  }
}
