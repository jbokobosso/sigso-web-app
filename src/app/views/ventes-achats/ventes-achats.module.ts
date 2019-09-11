import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentesAchatsRoutingModule } from './ventes-achats-routing.module';
import { VentesAchatsComponent } from './ventes-achats.component';


@NgModule({
  declarations: [VentesAchatsComponent],
  imports: [
    CommonModule,
    VentesAchatsRoutingModule
  ]
})
export class VentesAchatsModule { }
