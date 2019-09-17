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
import { MatDividerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [ApproComponent, AjouterArticleComponent, ModifierArticleComponent, ModifierCategorieComponent, AjouterCategorieComponent],
  imports: [
    CommonModule,
    ApproRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ]
})
export class ApproModule { }
