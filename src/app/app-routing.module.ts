import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProfessionalComponent } from './list-professional/list-professional.component';
import { CreateProfessionalComponent } from './create-professional/create-professional.component';
import { ListStatesComponent } from './list-states/list-states.component';

const routes: Routes = [
  { path: '', redirectTo: 'professionals', pathMatch: 'full' },
  { path: 'professionals', component: ListProfessionalComponent },
  { path: 'add', component: CreateProfessionalComponent },
  { path: 'states', component: ListStatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
