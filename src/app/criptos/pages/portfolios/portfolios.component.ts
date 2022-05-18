import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/interfaces/criptos.interface';
import { CriptosService } from '../../../services/criptos.service';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styles: [
  ]
})
export class PortfoliosComponent implements OnInit {

  portfolios:Portfolio[]=[]

  constructor( private criptoService:CriptosService) { }

  ngOnInit(): void {
    this.criptoService.getPortfolios()
      .subscribe( resp => (this.portfolios=resp));
  }

}
