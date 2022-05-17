import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MaterialModule } from '../material/material.module';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CriptosRoutingModule } from './criptos-routing.module';
import { ListaComponent } from './pages/lista/lista.component';
import { TarjetaCriptosComponent } from './pages/lista/tarjeta-criptos/tarjeta-criptos.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfoliosComponent } from './pages/portfolios/portfolios.component';
import { TarjetaPortfoliosComponent } from './pages/portfolios/tarjeta-portfolios/tarjeta-portfolios.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    BuscarComponent,
    CrearComponent,
    ListaComponent,
    TarjetaCriptosComponent,
    PortfoliosComponent,
    TarjetaPortfoliosComponent
  ],
  exports:[
    PrincipalComponent,
    BuscarComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CriptosRoutingModule,
    HttpClientModule
  ]
})
export class CriptosModule { }
