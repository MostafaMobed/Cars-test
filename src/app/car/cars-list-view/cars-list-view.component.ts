import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars-list-view',
  templateUrl: './cars-list-view.component.html',
  styleUrls: ['./cars-list-view.component.scss']
})
export class CarsListViewComponent implements OnInit {

  cars: any[] = [];

  constructor(private _carSrv: CarService) { }

  ngOnInit(): void {

    //get cars list from api
    this._carSrv.getCars().subscribe(
      cars => {
        this.cars = cars;
        console.log(cars);
      }
    )
  }

}
