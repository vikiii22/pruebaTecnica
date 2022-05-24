import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CriptosService } from '../../../../services/criptos.service';
import { switchMap } from 'rxjs';
import { Portfolio } from '../../../../interfaces/criptos.interface';

@Component({
  selector: 'app-editar-portfolios',
  templateUrl: './editar-portfolios.component.html',
  styles: [
  ]
})
export class EditarPortfoliosComponent implements OnInit {

  portfolio:Portfolio={
    id:0,
    name:''
  };

  constructor( private activatedRoute:ActivatedRoute, private coinService:CriptosService) { 
    this.activatedRoute.params
      .pipe(
        switchMap(({id})=> this.coinService.getPortfolioId(id))
      )
      .subscribe( resp => this.portfolio=resp);
  }

  ngOnInit(): void {
  }

  guardar(){
    if(this.portfolio.name.trim().length === 0) return;
    this.coinService.updatePortfolio(this.portfolio)
      .subscribe()
  }
}
