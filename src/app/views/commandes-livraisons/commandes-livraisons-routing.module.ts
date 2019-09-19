import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandesLivraisonsComponent } from './commandes-livraisons.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component' ;
import { SupprimerClientComponent } from './supprimer-client/supprimer-client.component';
import { AjouterFournComponent } from './ajouter-fourn/ajouter-fourn.component';


const routes: Routes = [
  {
    path: '',
    component: CommandesLivraisonsComponent
  },
  
  {
    path: 'ajouter-client',
    component: AjouterClientComponent
  },

  {
    path: 'modifier-client',
    component: ModifierClientComponent
  },

  {
    path: 'supprimer-client',
    component: SupprimerClientComponent
  },

  {
    path: 'ajouter-fourn',
    component: AjouterFournComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandesLivraisonsRoutingModule { }
