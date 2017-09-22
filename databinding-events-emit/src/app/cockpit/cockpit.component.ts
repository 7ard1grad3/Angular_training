import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{newServerName:string,newServerContent:string}>();
  @Output('vrBlueCreated') bluePrintCreated = new EventEmitter<{newServerName:string,newServerContent:string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('testRef') testRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  onAddServer(testRef_ref){
      console.log(this.testRef.nativeElement.value);
    this.serverCreated.emit(
        {newServerName: this.newServerName,
          newServerContent: this.newServerContent
        });
  }
  onAddBlueprint(){
      console.log('This event will be first');
    this.bluePrintCreated.emit(
        {newServerName: this.newServerName,
          newServerContent: this.newServerContent
        });
  }

}
