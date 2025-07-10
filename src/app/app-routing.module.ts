import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCepComponent } from './components/ceps/show-cep/show-cep.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ShowCep',
    pathMatch: 'full'
  },
  {
    path: '/showCep',
    component: ShowCepComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
