import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { HttpClientModule } from '@angular/common/http';

import {
  MatNativeDateModule, MatDatepickerModule, NativeDateModule, 
  MatButtonModule,     MatFormFieldModule,  MatInputModule, 
  MatRippleModule,     MatSortModule,       MatTableModule, 
  MatSelectModule,     } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProfessionalComponent } from './create-professional/create-professional.component';
import { ListProfessionalComponent } from './list-professional/list-professional.component';
import { ListStatesComponent } from './list-states/list-states.component';

import { ToastrModule } from 'ngx-toastr';
import { CreateSkillComponent } from './create-skill/create-skill.component';
import { ListSkillComponent } from './list-skill/list-skill.component';


import { FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    CreateProfessionalComponent,
    ListProfessionalComponent,
    ListStatesComponent,
    CreateSkillComponent,
    ListSkillComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatDatepickerModule,
    NativeDateModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule,
    ToastrModule.forRoot()
  ],
  exports: [
    MatSortModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
