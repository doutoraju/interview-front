import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { HttpClientModule } from '@angular/common/http';

import {MatNativeDateModule, MatDatepickerModule, NativeDateModule, 
  MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProfessionalComponent } from './create-professional/create-professional.component';
import { ListProfessionalComponent } from './list-professional/list-professional.component';
import { ListStatesComponent } from './list-states/list-states.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateProfessionalComponent,
    ListProfessionalComponent,
    ListStatesComponent,
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
