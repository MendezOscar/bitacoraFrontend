import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bitacory } from '../models/Bitacory';

@Injectable({
  providedIn: 'root'
})
export class BitacoryService {
  apiUrl = 'https://localhost:5001/api/Bitacory';

  constructor(private http: HttpClient) { }

  getBitacories() {
    return this.http.get<Bitacory[]>(this.apiUrl);
  }

  getBitacory(id: number) {
    return this.http.get<Bitacory>(this.apiUrl + '/' + id);
  }

  deleteBitacory(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createBitacory(bitacory: Bitacory) {
    return this.http.post<Bitacory>(this.apiUrl, bitacory);
  }

  editBitacory(bitacory: Bitacory) {
    return this.http.put<Bitacory>(this.apiUrl + '/' + bitacory.id, bitacory);
  }

  getBitacoryByDates(date1: string, date2: string) {
    console.log(this.apiUrl + '/get-by-range-date/' + date1 + '/' + date2);
    return this.http.get<Bitacory[]>(this.apiUrl + '/get-by-range-date/' + date1 + '/' + date2 );
  }
}
