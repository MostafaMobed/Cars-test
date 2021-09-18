import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ICar } from 'src/app/models/icar';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent implements OnInit {

  cars: ICar[] = [];
  @Input('carsSub') carsSub: BehaviorSubject<any> = new BehaviorSubject([]);

  private _unsubscribeAll: Subject<any>;

  constructor() {
    this._unsubscribeAll = new Subject();
   }

  ngOnInit(): void {
    
    this.carsSub
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(
      cars =>
      {
        if(cars) 
        {
          this.cars = this.sort_by_key(cars, 'name');

          this.cars.forEach(car => {
            car.carsChildrenSub = new BehaviorSubject(car.children)
          });
        }

      }
    );
  }

  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }


sort_by_key(array: any[], key: string)
  {
    return array.sort(function(a, b)
      {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
  }

}
