import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }
  clickme(){
    this.newItemEvent.emit("test")
  }
  @Input() fromChild2:string=""

}
