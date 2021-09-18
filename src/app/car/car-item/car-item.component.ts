import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent implements OnInit {

  @Input('cars') cars: any[] = [];

  constructor() { }

  ngOnInit(): void {
    if(this.cars)
      this.cars = this.sort_by_key(this.cars, 'name');
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
