import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from './address.model';

@Injectable({
  providedIn: 'root',
})
export class AddressApiService {
  // private baseUrl = ' http://localhost:3000/addressbook';
  private baseUrl = ' http://127.0.0.1:8080/addressbook/api';
  constructor(private http: HttpClient) {}
  getAllAddress(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.baseUrl}/get`);
  }
  getAddressById(id: string): Observable<Address> {
    return this.http.get<Address>(`${this.baseUrl}/get/${id}`);
  }

  deleteAddress(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
  createAddress(address: Address): Observable<Address> {
    const newAddress = {
      ...address,
    };

    return this.http.post<Address>(`${this.baseUrl}/create`, newAddress);
  }
  updateAddress(address: Address): Observable<Address> {
    return this.http.patch<Address>(
      `${this.baseUrl}/update/${address.id}`,
      address
    );
  }
}
// function generateUUID(): string {
//   // UUID v4 format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
//     /[xy]/g,
//     function (char) {
//       const rand = (Math.random() * 16) | 0;
//       const value = char === 'x' ? rand : (rand & 0x3) | 0x8;
//       return value.toString(16);
//     }
//   );
// }
