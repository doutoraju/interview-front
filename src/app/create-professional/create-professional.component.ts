import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfessionalService } from '../professional.service';
import { StateService } from '../state.service';

import { Professional} from '../professional';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-create-professional',
  templateUrl: './create-professional.component.html',
  styleUrls: ['./create-professional.component.css']
})
export class CreateProfessionalComponent implements OnInit {

  professional: Professional = new Professional();
  states: Observable<Object>;
  isValidFormSubmitted = false;

  submitted = false;

  constructor(private professionalService: ProfessionalService, private stateService: StateService) { }

  ngOnInit() {
    this.reloadData();
  }

  newProfessional(): void {
    this.submitted = false;
    this.professional = new Professional();
  }

  save() {
    this.professionalService.createProfessional(this.professional)
    .subscribe(data => console.log(data), error => console.log(error));
    this.professional = new Professional();
  }

  onSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    this.submitted = true;
    this.save();
    form.resetForm();
  }

  reloadData() {
    this.states = this.stateService.getStateList();
  }

}
