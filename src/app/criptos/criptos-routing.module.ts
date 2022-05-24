import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ListaComponent } from './pages/lista/lista.component';
import { PortfoliosComponent } from './pages/portfolios/portfolios.component';
import { VerMasComponent } from './pages/lista/ver-mas/ver-mas.component';
import { AgregarComponent } from './pages/lista/agregar/agregar.component';
import { VerPortfoliosComponent } from './pages/portfolios/ver-portfolios/ver-portfolios.component';
import { AgregarLineComponent } from './pages/portfolios/agregar-line/agregar-line.component';
import { EditarPortfoliosComponent } from './pages/portfolios/editar-portfolios/editar-portfolios.component';

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
        path:'portfolios/editar/:id',
        component:EditarPortfoliosComponent
      },
      {
        path:'portfolios/ver-portfolio/:id',
        component:VerPortfoliosComponent,
        children:[
          {
            path:'agregar-line',
            component:AgregarLineComponent
          }
        ]
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
