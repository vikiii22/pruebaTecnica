import { Component, Input, OnInit } from '@angular/core';
import { Coin } from '../../../../interfaces/criptos.interface';

@Component({
  selector: 'app-tarjeta-criptos',
  templateUrl: './tarjeta-criptos.component.html',
  styles: [
  ]
})
export class TarjetaCriptosComponent implements OnInit {

  @Input() coins:Coin[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
