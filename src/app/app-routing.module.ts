import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'car',
    loadChildren: () => import('./car/car.module').then(m => m.CarModule)
  },
  {
    path: 'traditional-forms',
    loadChildren: () => import('./traditional-forms/traditional-forms.module').then(m => m.TraditionalFormsModule)
  },
  {
    path: 'reactive-forms',
    loadChildren: () => import('./reactive-forms/reactive-forms.module').then(m => m.ReactiveFormsExampleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
