import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Professional } from '../professional';
import { ProfessionalService } from '../professional.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-professional',
  templateUrl: './list-professional.component.html',
  styleUrls: ['./list-professional.component.css']
})
export class ListProfessionalComponent implements OnInit, AfterViewInit {

  professionals: Observable<Professional>;
  displayedColumns: string[] = ['name', 'phone', 'birthday', 'email', 'city', 'state', 'description', 'actions'];
  dataSource = new MatTableDataSource();
  
  @ViewChild(MatSort) sort: MatSort;


  constructor(private professionalService: ProfessionalService, private toastr: ToastrService) { }

  ngOnInit() {

    // this.professionalService.getProfessionalList().subscribe(
    //   data => {
    //     this.dataSource.data = data;
    //   }
    // );

    this.reloadData();
  }

  reloadData() {
    this.professionalService.getProfessionalList().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
  }

  deleteProfessional(idProfessional: number) {
    this.professionalService.deleteProfessional(idProfessional)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success('Professional deleted successfully!', '', { positionClass: 'toast-top-center'});
          this.reloadData();
        },
        error => {
          console.log(error);

          this.toastr.success('An error occured while trying to delete professional.', '', { positionClass: 'toast-top-center'});
        }
      );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
