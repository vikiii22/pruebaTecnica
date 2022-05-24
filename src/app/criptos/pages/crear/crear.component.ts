import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../../interfaces/criptos.interface';
import { CriptosService } from '../../../services/criptos.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styles: [
  ]
})
export class CrearComponent implements OnInit {

  portfolioNuevo:Portfolio={
    name:''
  }

  constructor( private coinService:CriptosService ) { }

  ngOnInit(): void {
  }

  guardar(){
    this.coinService.setNuevoPortfolio(this.portfolioNuevo)
      .subscribe();
  }
}
