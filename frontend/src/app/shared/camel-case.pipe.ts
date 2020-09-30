import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let valueS : string = JSON.stringify(value);
    let values = valueS.split(' ');
    let textoEmCamelCase = '';

    for (let v of values){
      textoEmCamelCase += this.capitalize(v);
    }

    return textoEmCamelCase;
  }

  capitalize(texto : string){
    return texto.substr(0,1).toUpperCase.toString() + texto.substr(1).toLowerCase.toString();
  }

}
