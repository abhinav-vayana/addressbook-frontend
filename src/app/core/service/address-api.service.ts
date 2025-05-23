import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from './address.model';

@Injectable({
  providedIn: 'root',
})
export class AddressApiService {
  private baseUrl = '127.0.0.1:8000/addressbook/apis';
  constructor(private http: HttpClient) {}
  getAllAddress(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.baseUrl}/getall`);
  }
}
