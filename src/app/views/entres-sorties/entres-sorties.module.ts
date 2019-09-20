import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntresSortiesRoutingModule } from './entres-sorties-routing.module';
import { EntresSortiesComponent } from './entres-sorties.component';
import { MatGridListModule, MatCardModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { DeclarerEntreeComponent } from './declarer-entree/declarer-entree.component';
import { DeclarerSortieComponent } from './declarer-sortie/declarer-sortie.component';
import { VoirEntreesComponent } from './voir-entrees/voir-entrees.component';
import { VoirSortiesComponent } from './voir-sorties/voir-sorties.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EntresSortiesComponent, DeclarerEntreeComponent, DeclarerSortieComponent, VoirEntreesComponent, VoirSortiesComponent],
  imports: [
    CommonModule,
    EntresSortiesRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDividerModule
  ]
})
export class EntresSortiesModule { }
