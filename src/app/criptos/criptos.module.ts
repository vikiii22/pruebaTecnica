import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MaterialModule } from '../material/material.module';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CriptosRoutingModule } from './criptos-routing.module';



@NgModule({
  declarations: [
    PrincipalComponent,
    BuscarComponent,
    CrearComponent
  ],
  exports:[
    PrincipalComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CriptosRoutingModule
  ]
})
export class CriptosModule { }
