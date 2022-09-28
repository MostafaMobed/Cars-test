import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'for-loop',
    component: ForLoopComponent
  },
  {
    path: '**',
    redirectTo: 'for-loop'
  }
];

@NgModule({
  declarations: [
    ForLoopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AngularBasicsModule { }
