import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private base_url = "https://coding-portal-backend.vercel.app"
  constructor(private http:HttpClient) { }

  postSubmission(endpoint:string,data:any):Observable<any> {
    return this.http.post<any>(`${this.base_url}/${endpoint}`,data)
  }
}
