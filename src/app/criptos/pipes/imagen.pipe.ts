import { Pipe, PipeTransform } from '@angular/core';
import { Coin } from '../../interfaces/criptos.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(coin: Coin): unknown {
    let imagen = 'assets/images/' + coin.id + '.jpg';

    // Solución rápida que solo sirve para hacer esto como ejemplo
    (coin.id! > 10) ? imagen = 'assets/images/no-image.jpg' : imagen = 'assets/images/' + coin.id + '.jpg';

    return imagen;
  }

}
