import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ServicoComponent } from './servico/servico.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'form',component: FormComponent},
  {path:'servico',component: ServicoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
