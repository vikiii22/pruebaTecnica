import { Component, OnInit } from '@angular/core';
import { Coin } from '../../../../interfaces/criptos.interface';
import { CriptosService } from '../../../../services/criptos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})

export class AgregarComponent implements OnInit {

  coinNueva:Coin={
    name:'',
    acronym:''
  };

  constructor( private criptoService:CriptosService ) { }

  ngOnInit(): void {
  }

  guardar(){
    (this.coinNueva.name.trim().length===0) ? '' : this.criptoService.setNuevaCripto(this.coinNueva).subscribe(
      resp=>(console.log(resp))
    );
  }

}
