import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListsptheoloaiService {

  constructor(private http: HttpClient) { }

// cac phuong thuc
  getlistsptheoloai(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/productlist/1');
  }
}
