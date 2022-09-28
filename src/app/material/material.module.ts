import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectComponent } from './mat-select/mat-select.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'checkbox',
    component: CheckboxComponent
  },
  {
    path: 'select',
    component: MatSelectComponent
  },
  {
    path: '**',
    redirectTo: 'checkbox'
  }
];

@NgModule({
  declarations: [
    CheckboxComponent,
    MatSelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCheckboxModule,
    MatSelectModule,
    FormsModule
  ]
})
export class MaterialModule { }
