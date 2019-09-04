import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(intervalNumber){
    if(intervalNumber%2 == 0)
      this.evenNumbers.push(intervalNumber);
    else
      this.oddNumbers.push(intervalNumber);
  }
}
