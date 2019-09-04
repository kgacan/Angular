import { Component } from '@angular/core';
import { getLocaleDateFormat, getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: 
  [
    `
    .highThanFive{
        color:white;
      }
    `
  ]
})
export class AppComponent {
  
  username="";

  isUsernameHasValue(){
    if(this.username == "")
      return true;
    return false;
  }

  resetUsername(){
    this.username="";
  }

  displayPass=false;
  buttonClicks=[];
  counter=0;
  some="true";

  togglePassword(){
    this.displayPass= !this.displayPass;
    this.buttonClicks.push(++this.counter);
  }

  setColor(date){
    return date>=5 ? 'blue' : 'none'
  }
}
