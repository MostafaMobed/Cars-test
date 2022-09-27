import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormArrayComponent } from './form-array/form-array.component';

const routes: Routes = [
  {
    path: 'ordered-selects',
    component: FormArrayComponent
  },
  {
    path: '**',
    redirectTo: 'ordered-selects'
  }
];

@NgModule({
  declarations: [
    FormArrayComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ReactiveFormsExampleModule { }
