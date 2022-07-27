import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicatorComponent } from './indicator/indicator/indicator.component';

export const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'indicator',
      component: IndicatorComponent,
    },
    {
      path: '',
      redirectTo: 'indicator',
      pathMatch: 'full',
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
