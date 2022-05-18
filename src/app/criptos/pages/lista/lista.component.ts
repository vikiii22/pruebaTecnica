import { Component, OnInit } from '@angular/core';
import { Coin } from '../../../interfaces/criptos.interface';
import { CriptosService } from '../../../services/criptos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [`
    .lista{
      display:flex
    }
    .btn-agregar{
      position:absolute;
      right:0;
      margin-top:1%;
      margin-right:1%;
    }
  `
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
