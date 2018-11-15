import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbInfoService {
  http: HttpClient = null;

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getUsernames() {
        this.http.get('http://68.183.98.133:4000/api/usernames').subscribe(
          data => {
            console.log(data);
          }
        );
  }
}
