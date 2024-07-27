import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
         'Authorization': 'Bearer ' + token 
        });
      return this.http.get<any>('http://localhost:3000/admin', { headers: headers });
    } else {
      throw new Error('Token not found');
    }
  }
  getById(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/admin/${id}`);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/admin/${id}`);
  }
  update(data: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/admin/${data.id}`, data);
  }
  add(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/admin', data);
  }
}
