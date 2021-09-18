import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListViewComponent } from './cars-list-view/cars-list-view.component';
import { RouterModule, Routes } from '@angular/router';
import { CarItemComponent } from './car-item/car-item.component';

const routes: Routes = [
  {
    path: '',
    component: CarsListViewComponent
  }
];

@NgModule({
  declarations: [
    CarsListViewComponent,
    CarItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CarModule { }
