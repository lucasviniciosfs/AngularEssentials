import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valorInput : number;

  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementa(){
    this.valorInput++;
    this.mudouValor.emit({novoValor: this.valorInput});
  }

  decrementa(){
    this.valorInput--;
    this.mudouValor.emit({novoValor: this.valorInput});
  }

}
