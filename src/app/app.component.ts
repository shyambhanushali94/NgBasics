import { style } from '@angular/animations';
import { R3TargetBinder } from '@angular/compiler';
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
  isHidden: boolean = true;
  HideOrShow: string = "Show";
  ToogleShow() {
    this.isHidden = !this.isHidden;
    if (!this.isHidden) {
      this.HideOrShow = "Hide"

    } else {
      this.HideOrShow = "Show"
    }
  }



  color = "red";
  borderStyle = "hidden"
  status1 = 'online'
  status2 = 'offline'
  statusCheck() {
    return ("The app is " + this.status1)
  }
  appStatus: boolean = true;



  RandColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newcolor = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = newcolor;
    console.log(newcolor);
    // return newcolor;
  }

//   notimsg : string =""
textInput:string=""
//   notify(){
//     this.notimsg=  "HI"
//     console.log(event);
//   }
 print(printInfo: { value: string; }){
   console.log(printInfo.value)
  this.textInput = printInfo.value 

}
preview:string=""
}
