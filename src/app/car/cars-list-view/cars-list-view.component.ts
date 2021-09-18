import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { finalize } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';
import { ICar } from 'src/app/models/icar';

@Component({
  selector: 'app-cars-list-view',
  templateUrl: './cars-list-view.component.html',
  styleUrls: ['./cars-list-view.component.scss']
})
export class CarsListViewComponent implements OnInit {

  cars: ICar[] = [];
  carsSub: BehaviorSubject<any> = new BehaviorSubject([]);
  loading: boolean = false;

  constructor(private _carSrv: CarService) { }

  ngOnInit(): void {

    this.getCars();

  }

  getCars() {
    this.loading = true;
    //get cars list from api
    this._carSrv.getCars()
    .pipe(finalize(() => { this.loading = false}))
    .subscribe(
      cars => {
        this.cars = cars;
        this.carsSub.next(this.cars);
      },
      error => {
        //error alert
      }
    );
  }


  updateCars() {
    this.getCars();
  }

}
