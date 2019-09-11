import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntresSortiesComponent } from './entres-sorties.component';


const routes: Routes = [
  {
    path: '',
    component: EntresSortiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntresSortiesRoutingModule { }
