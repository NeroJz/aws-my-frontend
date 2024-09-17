import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class InfoService {
  endpoint: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getInfo() {
    return this.http.get(`${this.endpoint}/info`);
  }
}