import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Coin } from '../../../../interfaces/criptos.interface';
import { CriptosService } from '../../../../services/criptos.service';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styles:[`
    img{
      width:600px;
      height:500px;
      margin-left:10px;
    }
    span{
      margin-left:10px;
    }
  `
  ]
})
export class VerMasComponent implements OnInit {

  coin!:Coin;

  constructor( private activatedRoute:ActivatedRoute, private coinService:CriptosService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.coinService.getCoinsId(id))
      )
      .subscribe( coin => (
        this.coin=coin
      ));
  }

}
