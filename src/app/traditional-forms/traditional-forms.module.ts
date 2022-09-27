import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlSelectArrayComponent } from './html-select-array/html-select-array.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ordered-keys',
    component: HtmlSelectArrayComponent
  },
  {
    path: '**',
    redirectTo: 'ordered-keys'
  }
];

@NgModule({
  declarations: [
    HtmlSelectArrayComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TraditionalFormsModule { }
