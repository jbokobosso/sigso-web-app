import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntresSortiesRoutingModule } from './entres-sorties-routing.module';
import { EntresSortiesComponent } from './entres-sorties.component';


@NgModule({
  declarations: [EntresSortiesComponent],
  imports: [
    CommonModule,
    EntresSortiesRoutingModule
  ]
})
export class EntresSortiesModule { }
