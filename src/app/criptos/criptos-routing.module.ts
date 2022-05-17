import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes:Routes=[
  {
    path:'principal',
    component:PrincipalComponent
  },
  {
    path:'buscar',
    component:BuscarComponent
  },
  {
    path:'**',
    redirectTo:'principal'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriptosRoutingModule { }
