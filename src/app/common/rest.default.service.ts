import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root',
})
export class RestConsummerService {
  constructor(protected http: HttpClient) { }

  protected get<T>(url: string) {
    return this.http.get<T>(API_URL + url).pipe(
        map((ob: any) => {
          return ob;
        }));
  }
}
