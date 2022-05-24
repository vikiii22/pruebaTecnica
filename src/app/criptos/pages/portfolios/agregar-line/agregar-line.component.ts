import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CriptosService } from 'src/app/services/criptos.service';
import { switchMap, Subscription } from 'rxjs';
import { Line, Coin } from '../../../../interfaces/criptos.interface';

@Component({
  selector: 'app-agregar-line',
  templateUrl: './agregar-line.component.html',
  styles: [
  ]
})
export class AgregarLineComponent implements OnInit {

  line: Line = {
    coinId: 0,
    amount: 0,
    portfolioId: 0
  }
  id = 0;
  subscription!:Subscription;
  @Input() moneda:Coin[]=[];

  constructor(private activatedRoute: ActivatedRoute, private coinService: CriptosService) {
    this.subscription = this.activatedRoute.parent!.params
      .pipe(
        switchMap(({ id }) => this.id = id)
      )
      .subscribe();

      console.log(this.moneda.length)
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  guardar() {
    this.coinService.setLine(this.id, this.line)
      .subscribe(resp => console.log(resp));
    window.location.reload();
  }

}
