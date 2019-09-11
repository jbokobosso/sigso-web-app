import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentesAchatsComponent } from './ventes-achats.component';


const routes: Routes = [
  {
    path: '',
    component: VentesAchatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentesAchatsRoutingModule { }
