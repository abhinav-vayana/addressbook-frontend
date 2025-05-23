import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from './address.model';

@Injectable({
  providedIn: 'root',
})
export class AddressApiService {
  private baseUrl = 'http://127.0.0.1:8000/addressbook/api';
  constructor(private http: HttpClient) {}
  getAllAddress(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.baseUrl}/getall`);
  }
}
