import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandesLivraisonsComponent } from './commandes-livraisons.component';


const routes: Routes = [
  {
    path: '',
    component: CommandesLivraisonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandesLivraisonsRoutingModule { }
