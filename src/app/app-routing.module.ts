import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProfessionalComponent } from './list-professional/list-professional.component';
import { CreateProfessionalComponent } from './create-professional/create-professional.component';
import { ListStatesComponent } from './list-states/list-states.component';
import { CreateSkillComponent} from './create-skill/create-skill.component';
import { ListSkillComponent} from './list-skill/list-skill.component';

const routes: Routes = [
  { path: '', redirectTo: 'professionals', pathMatch: 'full' },
  { path: 'professionals', component: ListProfessionalComponent },
  { path: 'add', component: CreateProfessionalComponent },
  { path: 'states', component: ListStatesComponent },
  { path: 'skills', component: ListSkillComponent },
  { path: 'add-skill', component: CreateSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
