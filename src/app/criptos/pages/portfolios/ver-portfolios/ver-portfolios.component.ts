import { Component, Input, OnDestroy, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Portfolio } from 'src/app/interfaces/criptos.interface';
import { CriptosService } from 'src/app/services/criptos.service';
import { map, Observable, Subscription, switchMap } from 'rxjs';
import { Line, Coin } from '../../../../interfaces/criptos.interface';

@Component({
  selector: 'app-ver-portfolios',
  templateUrl: './ver-portfolios.component.html',
  styles: [`
    mat-card{
      margin:10px;
    }
    mat-card-subtitle{
      cursor:default;
    }
  `
  ]
})
export class VerPortfoliosComponent implements OnDestroy {
  
  lines: Line[]=[];
  moneda:Coin[]=[];
  subscription!:Subscription;
  total=0;

  constructor(private activatedRoute: ActivatedRoute, private coinService: CriptosService) { 
    this.subscription = this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.coinService.getLinesOfPortfolios(id))
      )
      .subscribe(
        resp => {
          (this.lines = resp);
          this.lines.forEach(e => {
            this.total+=e.amount;
            coinService.getCoinsId(e.coinId)
              .subscribe( resp => (this.moneda.push(resp)))
          })
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  eliminar(id:number){
    this.coinService.deleteLine(id)
      .subscribe();
    window.location.reload();
  }

}
