import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: "root" })
export class CarService {

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    ) {
    }


    getCars(): Observable<any> {
      return this._httpClient.get( environment.apiBaseUrl + '/api/getCars');
    }

}