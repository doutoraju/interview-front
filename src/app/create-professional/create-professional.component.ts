import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProfessionalService } from '../professional.service';
import { StateService } from '../state.service';

import { Professional} from '../professional';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-create-professional',
  templateUrl: './create-professional.component.html',
  styleUrls: ['./create-professional.component.css']
})
export class CreateProfessionalComponent implements OnInit {

  professional: Professional = new Professional();
  states: Observable<Object>;

  createForm: FormGroup;

  constructor(private professionalService: ProfessionalService, private stateService: StateService,
              private fb: FormBuilder, private toastr: ToastrService) {


      // this.professional = this.createForm.value;

  }

  ngOnInit() {
    this.loadStateList();
    this.getForm();
  }

  showSuccess(msg: string) {
    this.toastr.success(msg, '', { positionClass: 'toast-top-center'});
  }

  showFailure(msg: string) {
    this.toastr.error(msg, '', { positionClass: 'toast-top-center'});
  }

  save(pro: FormGroup) {
    this.professionalService.createProfessional(pro.value)
    .subscribe(
      data => {
        console.log(data);
        this.professional = new Professional();
        this.showSuccess('Professional saved!');
      },
      error => {
        console.log(error);
        this.showFailure('Error saving professional.');
      }
    );
    pro.reset();
  }

  onSubmit() {
    if (this.createForm.invalid) {
      return;
    }
    this.save(this.createForm);
  }

  loadStateList() {
    this.states = this.stateService.getStateList();
    this.states.forEach( state => console.log(state));
  }

  getForm() {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      description: ['']
    });
  }

  get name() {
    return this.createForm.get('name');
  }

  get phone() {
    return this.createForm.get('phone');
  }

  get birthday() {
    return this.createForm.get('birthday');
  }

  get email() {
    return this.createForm.get('email');
  }

  get city() {
    return this.createForm.get('city');
  }

  get state() {
    return this.createForm.get('state');
  }

  get description() {
    return this.createForm.get('description');
  }


}
