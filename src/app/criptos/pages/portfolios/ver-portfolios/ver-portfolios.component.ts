import { Component, Input, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Portfolio } from 'src/app/interfaces/criptos.interface';
import { CriptosService } from 'src/app/services/criptos.service';
import { map, switchMap } from 'rxjs';
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

  constructor(private activatedRoute: ActivatedRoute, private coinService: CriptosService) { 
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.coinService.getLinesOfPortfolios(id))
      )
      .subscribe(
        resp => {
          (this.lines = resp);
          this.lines.forEach(e => {
            coinService.getCoinsId(e.coinId)
              .subscribe( resp => (this.moneda.push(resp)))
          })
        }
      );
  }

  ngOnInit(): void {
    
  };

}
