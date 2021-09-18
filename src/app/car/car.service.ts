import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class CarService {

    carsList: BehaviorSubject<any>;



    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        //private _httpClient: HttpClient
    ) {
        // Set the defaults
        this.carsList = new BehaviorSubject(data);
    }


    getCars(): Observable<any> {
      return this.carsList;
    }

}


const data = [
    {
      "name": "Volkswagen",
      "include": true,
      "children": [
        {
          "name": "Bentley",
          "include": true
        },
        {
          "name": "Porsche",
          "include": false
        },
        {
          "name": "Audi",
          "include": true,
          "children": [
            {
              "name": "SubBrand",
              "include": false
            },
            {
              "name": "Lamborghini",
              "include": true,
              "children": [
                {
                  "name": "M. SVJ",
                  "include": true
                },
                {
                  "name": "Model",
                  "include": false
                },
                {
                  "name": "A. SVJ",
                  "include": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "PSA",
      "include": true,
      "children": [
        {
          "name": "PEUGEOT",
          "include": true,
          "children": [
            {
              "name": "CITROEN",
              "include": true,
              "children": [
                {
                  "name": "Xantia",
                  "include": true
                },
                {
                  "name": "C3",
                  "include": true
                },
                {
                  "name": "C1",
                  "include": false
                }
              ]
            }
          ]
        }
      ]
    }
  ];