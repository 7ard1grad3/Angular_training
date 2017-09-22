import {Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None //Allows to use any style
})
export class ServerElementComponent implements OnInit,OnChanges {
  /*@input() allows to access element by data binding*/
  @Input('srvElement') element: { name:string, type:string, content:string };
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log(simpleChanges);
  }
}
