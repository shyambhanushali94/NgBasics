import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgBasics';
  name: string = 'Jigar';
  age: number = 2022 - 1999;
  imgPath = 'https://image.emojipng.com/707/12061707.jpg';
  isHidden: boolean = false;
  color = "red";
  borderStyle = "hidden"
  status1 = 'online'
  status2 = 'offline'
  statusCheck() {
    return ("The app is " + this.status1)
  }
  appStatus: boolean = true;
  

}
