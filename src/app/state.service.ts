import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private stateUrl = environment.apiUrl.concat('/api/states/');

  constructor(private http: HttpClient) { }

  getStateList(): Observable<any> {
    return this.http.get(`${this.stateUrl}`);
  }
}
