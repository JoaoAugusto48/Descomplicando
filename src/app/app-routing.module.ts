import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCepComponent } from './components/ceps/show-cep/show-cep.component';
import { FindCepComponent } from './components/ceps/find-cep/find-cep.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'showCep',
    pathMatch: 'full'
  },
  {
    path: 'showCep',
    component: ShowCepComponent
  },
  {
    path: 'findCep',
    component: FindCepComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
