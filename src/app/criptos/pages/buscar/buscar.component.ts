import { Component, OnInit } from '@angular/core';
import { Criptos, Coin } from '../../../interfaces/criptos.interface';
import { CriptosService } from '../../../services/criptos.service';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [`
    img{
      margin-left:40px;
      width:35%;
      height:50%;
    }
  `
  ]
})
export class BuscarComponent implements OnInit {

  termino:string='';
  cripto:Coin[]=[];
  criptoElegida!:Coin;

  constructor( private coinService:CriptosService ) { }

  ngOnInit(): void {
  }

  buscando(){
    this.coinService.getSugerencias( this.termino )
      .subscribe( e => this.cripto=e);
  }

  seleccionado( evento:MatAutocompleteSelectedEvent ){
    const cObtenida:Coin = evento.option.value;
    this.termino=cObtenida.name;
    this.coinService.getCoinsId(cObtenida.id!)
      .subscribe( e => this.criptoElegida=e);
  }

}
