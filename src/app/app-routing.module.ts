import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path:'criptos',
    loadChildren: ()=>import('./criptos/criptos.module').then(m => m.CriptosModule)
  },
  {
    path: '404',
    component:ErrorPageComponent
  },
  {
    path:'**',
    redirectTo:'criptos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
