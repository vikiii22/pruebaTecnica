import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from '../../../../interfaces/criptos.interface';
import { CriptosService } from '../../../../services/criptos.service';

@Component({
  selector: 'app-tarjeta-portfolios',
  templateUrl: './tarjeta-portfolios.component.html',
  styles: [`
     mat-card{
      margin:5px;
    }
  `
  ]
})
export class TarjetaPortfoliosComponent implements OnInit {

  @Input() portfolios:Portfolio[]=[];

  constructor( private coinService:CriptosService ) { }

  ngOnInit(): void {
  }

  eliminar(id:number){
    this.coinService.deletePortfolio(id)
      .subscribe();
    window.location.reload();
  }
}
