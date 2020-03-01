import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RpsChoice, RpsResponse, RpsResponseData} from '../entities/RpsResponse';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  basePath = 'http://localhost:8080/play/';

  constructor(private http: HttpClient) {}

  getWinner(choice: RpsChoice): Observable<RpsResponse> {
    const url = this.basePath + choice;
    return this.http.get<RpsResponseData>(url).pipe(
      map((response: RpsResponse) => RpsResponse.createRpsResponse(response))
    );
  }
}
