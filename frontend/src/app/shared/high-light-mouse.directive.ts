import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLightMouse]'
})
export class HighLightMouseDirective {

  @HostListener('mouseover') mouseover(){
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = 'red';
  }

  @HostBinding('style.backgroundColor') backgroundColor : string;

  constructor() { }

}
