import { Component,OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  serverElements = [];
  constructor(){
      console.log('Constructor Called');
  }
    ngOnInit() {
        console.log('ngOnInit Called');
    }
    ngOnChanges() {
        console.log('ngOnChanges Called');
    }
  onServerAdded(serverData: {newServerName:string,newServerContent:string}) {
       this.serverElements.push({
     type: 'server',
     name: serverData.newServerName,
     content: serverData.newServerContent
     });
  }

  onBlueprintAdded(bluePrintData: {newServerName:string,newServerContent:string}) {
      console.log('This event will come after emit');
        this.serverElements.push({
     type: 'blueprint',
     name: bluePrintData.newServerName,
     content: bluePrintData.newServerContent
     });
  }
}
