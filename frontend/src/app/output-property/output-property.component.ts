import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valorInput : number;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('valorDoInput') valorDoInput : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  incrementa(){
    //this.valorInput++;
    this.valorDoInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valorDoInput.nativeElement.value});
  }

  decrementa(){
    //this.valorInput--;
    this.valorDoInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valorDoInput.nativeElement.value});
  }

}
