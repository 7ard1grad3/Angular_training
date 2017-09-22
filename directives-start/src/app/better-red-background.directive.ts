import { Directive,ElementRef,Renderer2,HostListener,HostBinding,Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterRedBackground]'
})
export class BetterRedBackgroundDirective implements OnInit {
  @Input('appBetterRedBackground') color: string;
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private element: ElementRef,private renderer: Renderer2) {
    this.color = 'blue';
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.color);
  }
  ngOnInit(){
    this.backgroundColor = this.color;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.color = 'yellow';
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.color);
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.color = 'brown';
    //this.renderer.setStyle(this.element.nativeElement,'backgroundColor','transparent');
    this.backgroundColor = this.color;
  }
}
