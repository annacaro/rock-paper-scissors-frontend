import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RpsResponse} from '../entities/RpsResponse';
import {Observable} from 'rxjs';
import {RpsRequest} from '../entities/RpsRequest';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  basePath = 'http://localhost:8080/play/';

  constructor(private http: HttpClient) {}

  play(userChoice: RpsRequest): Observable<RpsResponse> {
    return this.http.post<RpsResponse>(this.basePath, userChoice);
  }
}
