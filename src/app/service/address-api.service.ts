import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from './address.model';

@Injectable({
  providedIn: 'root',
})
export class AddressApiService {
  private baseUrl = ' http://localhost:3000/addressbook';
  constructor(private http: HttpClient) {}
  getAllAddress(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.baseUrl}`);
  }
  deleteAddress(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  createAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(`${this.baseUrl}/create`, address);
  }
}
