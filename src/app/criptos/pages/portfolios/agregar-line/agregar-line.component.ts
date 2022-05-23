import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CriptosService } from 'src/app/services/criptos.service';
import { switchMap } from 'rxjs';
import { Line } from '../../../../interfaces/criptos.interface';

@Component({
  selector: 'app-agregar-line',
  templateUrl: './agregar-line.component.html',
  styles: [
  ]
})
export class AgregarLineComponent implements OnInit {

  line:Line={
    coinId:0,
    amount:0,
    portfolioId:0
  }
  id=0;

  constructor(private activatedRoute: ActivatedRoute, private coinService: CriptosService) {
    activatedRoute.queryParams.subscribe(
      params=> {
        this.id=params['id'];
      }
    )
      console.log(this.id);
  }

  ngOnInit(): void {
  }

  guardar(){
    this.coinService.setLine(this.line.portfolioId!, this.line)
      .subscribe( resp => console.log(resp));
  }

}
