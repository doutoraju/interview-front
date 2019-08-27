import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Professional } from '../professional';
import { ProfessionalService } from '../professional.service';

@Component({
  selector: 'app-list-professional',
  templateUrl: './list-professional.component.html',
  styleUrls: ['./list-professional.component.css']
})
export class ListProfessionalComponent implements OnInit {

  professionals: Observable<Professional>;
  constructor(private professionalService: ProfessionalService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.professionals = this.professionalService.getProfessionalList();
  }

  deleteProfessional(idProfessional: number) {
    this.professionalService.deleteProfessional(idProfessional)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
