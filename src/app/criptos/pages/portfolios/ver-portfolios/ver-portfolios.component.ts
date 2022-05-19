import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Portfolio } from 'src/app/interfaces/criptos.interface';
import { CriptosService } from 'src/app/services/criptos.service';
import { switchMap } from 'rxjs';
import { Line, Coin } from '../../../../interfaces/criptos.interface';

@Component({
  selector: 'app-ver-portfolios',
  templateUrl: './ver-portfolios.component.html',
  styles: [`
    mat-card{
      margin:10px;
    }
  `
  ]
})
export class VerPortfoliosComponent implements OnInit {

  lines: Line[]=[];
  moneda:Coin[]=[];

  constructor(private activatedRoute: ActivatedRoute, private coinService: CriptosService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.coinService.getLinesOfPortfolios(id))
      )
      .subscribe(
        resp => (this.lines = resp)
      );

      this.coinService.getCoins()
        .subscribe( resp => (this.moneda=resp))
  };

}
