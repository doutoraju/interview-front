import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  private skillUrl = '/api/skills/';
    
  constructor(private http: HttpClient) { }

  createSkill(skill: Object ): Observable<Object> {
    return this.http.post(`${this.skillUrl}`, skill);
  }

  getSkillList(): Observable<any> {
    return this.http.get(`${this.skillUrl}`);
  }

  deleteSkill(idSkill: number): Observable<any> {
    return this.http.delete(`${this.skillUrl}/${idSkill}`, { responseType: 'text' });
  }


}
