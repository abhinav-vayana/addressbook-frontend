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
  getAddressById(id: string): Observable<Address> {
    return this.http.get<Address>(`${this.baseUrl}/${id}`);
  }

  deleteAddress(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  createAddress(address: Address): Observable<Address> {
    const newAddress = {
      ...address,
      id: generateUUID(),
    };

    return this.http.post<Address>(`${this.baseUrl}`, newAddress);
  }
}
function generateUUID(): string {
  // UUID v4 format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (char) {
      const rand = (Math.random() * 16) | 0;
      const value = char === 'x' ? rand : (rand & 0x3) | 0x8;
      return value.toString(16);
    }
  );
}
