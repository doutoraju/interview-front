import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../skill';
import { SkillService } from '../skill.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-skill',
  templateUrl: './list-skill.component.html',
  styleUrls: ['./list-skill.component.css']
})
export class ListSkillComponent implements OnInit {

  skills: Observable<Skill>;
  displayedColumns: string[] = ['name', 'description','actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private skillService: SkillService, private toastr: ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.skillService.getSkillList().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
  }

  deleteSkill(idSkill: number) {
    this.skillService.deleteSkill(idSkill)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.success('Skill deleted successfully!', '', { positionClass: 'toast-top-center'});
          this.reloadData();
        },
        error => {
          console.log(error);
          this.toastr.success('An error occured while trying to delete skill.', '', { positionClass: 'toast-top-center'});
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
