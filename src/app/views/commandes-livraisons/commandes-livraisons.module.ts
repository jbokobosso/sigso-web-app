import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandesLivraisonsRoutingModule } from './commandes-livraisons-routing.module';
import { CommandesLivraisonsComponent } from './commandes-livraisons.component';


@NgModule({
  declarations: [CommandesLivraisonsComponent],
  imports: [
    CommonModule,
    CommandesLivraisonsRoutingModule
  ]
})
export class CommandesLivraisonsModule { }
