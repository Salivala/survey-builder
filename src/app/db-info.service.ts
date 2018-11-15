import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbInfoService {
  private http: HttpClient = null;

  constructor(private tmphttp: HttpClient) {
    this.http = tmphttp;
  }

  getUsernames() {
        this.http.get('http://68.183.98.133:4000/api/usernames').subscribe(
          data => {
            console.log(data);
          }
        );
  }
}
