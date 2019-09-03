import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private stateUrl = '/api/states/';

  constructor(private http: HttpClient) { }

  getStateList(): Observable<any> {
    return this.http.get(`${this.stateUrl}`);
  }
}
