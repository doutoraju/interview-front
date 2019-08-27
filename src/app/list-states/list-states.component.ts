import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../state.service';

@Component({
  selector: 'app-list-states',
  templateUrl: './list-states.component.html',
  styleUrls: ['./list-states.component.css']
})
export class ListStatesComponent implements OnInit {

  states: Observable<Object>;
  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.states = this.stateService.getStateList();
  }

}
