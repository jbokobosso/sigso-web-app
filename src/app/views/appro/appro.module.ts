import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApproRoutingModule } from './appro-routing.module';
import { ApproComponent } from './appro.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { AjouterCategorieComponent } from './ajouter-categorie/ajouter-categorie.component';


@NgModule({
  declarations: [ApproComponent, AjouterArticleComponent, ModifierArticleComponent, ModifierCategorieComponent, AjouterCategorieComponent],
  imports: [
    CommonModule,
    ApproRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ApproModule { }
