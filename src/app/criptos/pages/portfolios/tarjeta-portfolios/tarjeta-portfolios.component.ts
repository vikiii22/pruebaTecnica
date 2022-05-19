import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from '../../../../interfaces/criptos.interface';

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

  constructor() { }

  ngOnInit(): void {
  }

}
