import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'frontend';

  exibeNovoValor(event){
    console.log(event.novoValor)
  }
}
