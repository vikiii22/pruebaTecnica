import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coin, Portfolio } from '../interfaces/criptos.interface';

@Injectable({
  providedIn: 'root'
})
export class CriptosService {

  constructor( private http:HttpClient) { }

  getCoins(){
    return this.http.get<Coin[]>('http://localhost:3000/coins');
  }

  getPortfolios(){
    return this.http.get<Portfolio[]>('http://localhost:3000/portfolios');
  }
}
