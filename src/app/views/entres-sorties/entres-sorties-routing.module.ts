import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntresSortiesComponent } from './entres-sorties.component';
import { VoirEntreesComponent } from './voir-entrees/voir-entrees.component';
import { DeclarerEntreeComponent } from './declarer-entree/declarer-entree.component';
import { DeclarerSortieComponent } from './declarer-sortie/declarer-sortie.component';
import { VoirSortiesComponent } from './voir-sorties/voir-sorties.component';


const routes: Routes = [
  {
    path: '',
    component: EntresSortiesComponent
  },
  {
    path: 'voir-sorties',
    component: VoirSortiesComponent
  },
  {
    path: 'voir-entrees',
    component: VoirEntreesComponent
  },
  {
    path: 'declarer-entree',
    component: DeclarerEntreeComponent
  },
  {
    path: 'declarer-sortie',
    component: DeclarerSortieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntresSortiesRoutingModule { }
