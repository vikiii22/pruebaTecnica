import { Component, Input, OnInit } from '@angular/core';
import { Coin } from '../../../../interfaces/criptos.interface';

@Component({
  selector: 'app-tarjeta-criptos',
  templateUrl: './tarjeta-criptos.component.html',
  styles: [`
    mat-card{
      margin:5px;
    }
    img{
      width:250px;
      height:250px;
      margin-right:auto;
      margin-left:auto;
    }
    button{
      margin:5px;
    }
  `
  ]
})
export class TarjetaCriptosComponent implements OnInit {

  @Input() coins:Coin[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
