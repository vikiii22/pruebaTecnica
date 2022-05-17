import { Component, OnInit } from '@angular/core';
import { Coin } from '../../../interfaces/criptos.interface';
import { CriptosService } from '../../../services/criptos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  coins:Coin[]=[];

  constructor( private criptoService:CriptosService) { }

  ngOnInit(): void {
    this.criptoService.getCoins()
      .subscribe( resp => (this.coins=resp));
  }

}
