import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ListaComponent } from './pages/lista/lista.component';
import { PortfoliosComponent } from './pages/portfolios/portfolios.component';
import { VerMasComponent } from './pages/lista/ver-mas/ver-mas.component';
import { AgregarComponent } from './pages/lista/agregar/agregar.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children: [
      {
        path: 'lista',
        component: ListaComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: 'crear',
        component:CrearComponent
      },
      {
        path:'portfolios',
        component:PortfoliosComponent
      },
      {
        path:'lista/agregar',
        component:AgregarComponent
      },
      {
        path:'lista/:id',
        component:VerMasComponent
      },
      {
        path: '**',
        redirectTo: 'lista'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriptosRoutingModule { }
