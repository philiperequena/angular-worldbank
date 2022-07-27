import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestConsummerService } from 'src/app/common/rest.default.service';
import { ContryModel } from '../models/indicator.model';

const SERVICE_PATH = '/country'

@Injectable({
  providedIn: 'root'
})
export class IndicatorService extends RestConsummerService{

  getAllCountriesCodes(): Observable<ContryModel[]> {
    return super.get<any[]>(`${SERVICE_PATH}/code`).pipe(
        map((ob: any) => {
          return ob.data;
        }));
  }


  getAllIndicatorsByContry(code:string): Observable<ContryModel[]> {
    return super.get<any[]>(`${SERVICE_PATH}/indicator/${code}`).pipe(
        map((ob: any) => {
          return ob.data;
        }));
  }

}
