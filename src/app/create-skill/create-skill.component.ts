import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Skill } from '../skill';
import { SkillService } from '../skill.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-skill-component',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit {

  skill: Skill = new Skill();   
  createForm: FormGroup;

  constructor(private skillService:SkillService,private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.getForm();
  }

  showSuccess(msg: string) {
    this.toastr.success(msg, '', { positionClass: 'toast-top-center'});
  }

  showFailure(msg: string) {
    this.toastr.error(msg, '', { positionClass: 'toast-top-center'});
  }

  save(pro: FormGroup) {
    this.skillService.createSkill(pro.value)
    .subscribe(
      data => {
        console.log(data);
        this.skill = new Skill();
        this.showSuccess('Skill saved!');
      },
      error => {
        console.log(error);
        this.showFailure('Error saving skill.');
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

  getForm() {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get name() {
    return this.createForm.get('name');
  }

  get description() {
    return this.createForm.get('description');
  }

}
