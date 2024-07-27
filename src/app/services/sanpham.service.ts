import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SanphamService {

  constructor(private http: HttpClient) { }

// cac phuong thuc
  getsanPham(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/sp/4');
  }
}
