import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  public clicado : boolean;

  constructor() { }

  ngOnInit(): void {
    this.clicado = false;
  }

}
