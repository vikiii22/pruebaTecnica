import { Pipe, PipeTransform } from '@angular/core';
import { Coin } from '../../interfaces/criptos.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(coin:Coin): unknown {
    let imagen='assets/images/'+coin.id+'.jpg';
    return imagen;
  }

}
