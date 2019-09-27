import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandesLivraisonsRoutingModule } from './commandes-livraisons-routing.module';
import { CommandesLivraisonsComponent } from './commandes-livraisons.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { SupprimerClientComponent } from './supprimer-client/supprimer-client.component';
import { AjouterFournComponent } from './ajouter-fourn/ajouter-fourn.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListeClientsComponent } from '../../partials/liste-clients/liste-clients.component';
import { MatDividerModule } from '@angular/material';


@NgModule({
  declarations: [CommandesLivraisonsComponent, AjouterClientComponent, ModifierClientComponent, SupprimerClientComponent, AjouterFournComponent, ListeClientsComponent],
  imports: [
    CommonModule,
    CommandesLivraisonsRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule, MatDividerModule
  ]
})
export class CommandesLivraisonsModule { }
