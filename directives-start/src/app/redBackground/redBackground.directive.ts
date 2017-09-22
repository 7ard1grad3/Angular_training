import { Directive,ElementRef,OnInit} from '@angular/core';
@Directive({
    selector: '[redBackground]'
})
export class redBackgroundDirective implements OnInit{
    constructor(private elementRef: ElementRef){

    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = "red";
    }
}