import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appYellowBackground]'
})
export class YellowBackgroundDirective {

   constructor(
    private _elementRef : ElementRef,
    private _renderer : Renderer2
  ) { }

  ngOnInit(): void {
    //unsecurity
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'red'
    )
  }

}
