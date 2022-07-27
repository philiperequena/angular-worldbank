import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicatorComponent } from './indicator/indicator/indicator.component';

export const routes: Routes = [  {
  path: '',
  component: IndicatorComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
