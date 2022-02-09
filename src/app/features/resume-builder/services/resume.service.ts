import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ResumeData } from '../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  apiLink: string = environment.url

  constructor(private http: HttpClient) { }

  getResumeList(): Observable<ResumeData[]> {
    return this.http.get<ResumeData[]>(`${this.apiLink}/ResumeData`);
  }
  getResumeInfo(id: number): Observable<ResumeData> {
    return this.http.get<ResumeData>(`${this.apiLink}/ResumeData/${id}`);
  }
  addEmployee(resumesList: ResumeData): Observable<ResumeData> {
    return this.http.post<ResumeData>(`${this.apiLink}/ResumeData`, resumesList);
  }
}

